'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !window.THREE) return

    const THREE = window.THREE
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 200)
    camera.position.set(0, 0, 18)

    scene.add(new THREE.AmbientLight(0x0a0f3c, 2))
    const dl = new THREE.DirectionalLight(0x4080ff, 3); dl.position.set(10, 15, 10); dl.castShadow = true; scene.add(dl)
    const pb = new THREE.PointLight(0x2752f5, 6, 40); pb.position.set(-8, 4, 8); scene.add(pb)
    const pt = new THREE.PointLight(0x00e5d4, 5, 30); pt.position.set(10, -4, 6); scene.add(pt)
    const pg = new THREE.PointLight(0xf5a623, 4, 25); pg.position.set(0, 8, -2); scene.add(pg)
    scene.add(new THREE.PointLight(0x6060ff, 3, 50)).position.set(-15, -5, -5)

    const mb = new THREE.MeshPhysicalMaterial({ color: 0x1a3fd4, metalness: 0.8, roughness: 0.15, clearcoat: 1, transparent: true, opacity: 0.92 })
    const mt = new THREE.MeshPhysicalMaterial({ color: 0x00c4b5, metalness: 0.7, roughness: 0.1, clearcoat: 0.8, transparent: true, opacity: 0.88 })
    const mg = new THREE.MeshPhysicalMaterial({ color: 0xf5a623, metalness: 0.9, roughness: 0.1, clearcoat: 1 })
    const md = new THREE.MeshPhysicalMaterial({ color: 0x0c1a60, metalness: 0.6, roughness: 0.3, transparent: true, opacity: 0.7 })

    const group = new THREE.Group(); scene.add(group)
    const objs = []
    function add(m, rx = 0, ry = 0, ph = 0) { m.castShadow = true; group.add(m); objs.push({ m, rx, ry, ph, oy: m.position.y }) }

    const sm = new THREE.Mesh(new THREE.SphereGeometry(3.2, 64, 64), mb); sm.position.set(5, 0, -2); add(sm, 0.003, 0.005, 0)
    const wm = new THREE.Mesh(new THREE.SphereGeometry(3.25, 32, 32), new THREE.MeshBasicMaterial({ color: 0x4060ff, wireframe: true, transparent: true, opacity: 0.08 })); wm.position.copy(sm.position); group.add(wm)
    const t1 = new THREE.Mesh(new THREE.TorusGeometry(4.2, 0.18, 20, 120), mt); t1.position.copy(sm.position); t1.rotation.x = Math.PI / 2.5; add(t1, 0.008, 0.004, 0.5)
    const t2 = new THREE.Mesh(new THREE.TorusGeometry(5.0, 0.09, 16, 100), mg); t2.position.copy(sm.position); t2.rotation.x = Math.PI / 1.6; t2.rotation.z = 0.5; add(t2, -0.006, 0.007, 1)
    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 1), mg); ico.position.set(-6, 3, 1); add(ico, 0.01, 0.012, 0.3)
    const oct = new THREE.Mesh(new THREE.OctahedronGeometry(1.0), mt); oct.position.set(10, 4, 2); add(oct, 0.015, 0.008, 1.2)
    ;[{ p: [-4, -3, 3], r: 0.6, m: mt, ph: 0.8 }, { p: [8, -3, 0], r: 0.5, m: mg, ph: 1.5 }, { p: [-2, 5, 1], r: 0.45, m: mb, ph: 2.1 }, { p: [11, 1, 3], r: 0.35, m: mt, ph: 0.2 }, { p: [-7, -1, -2], r: 0.7, m: mg, ph: 1.8 }].forEach(d => { const s = new THREE.Mesh(new THREE.SphereGeometry(d.r, 32, 32), d.m); s.position.set(...d.p); add(s, 0.02, 0.015, d.ph) })
    const cy1 = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 3.5, 32), md); cy1.position.set(-8, 2, -1); cy1.rotation.z = 0.8; add(cy1, 0.006, 0.009, 0.7)
    const tet = new THREE.Mesh(new THREE.TetrahedronGeometry(0.9), mg); tet.position.set(-5, -4, 2); add(tet, 0.018, 0.012, 1.1)
    const con = new THREE.Mesh(new THREE.ConeGeometry(0.7, 2.2, 6), mt); con.position.set(7, 5, -1); add(con, 0.012, 0.016, 2.5)

    const pp = new Float32Array(180 * 3)
    for (let i = 0; i < 180; i++) { pp[i * 3] = (Math.random() - 0.5) * 60; pp[i * 3 + 1] = (Math.random() - 0.5) * 40; pp[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5 }
    const pg2 = new THREE.BufferGeometry(); pg2.setAttribute('position', new THREE.BufferAttribute(pp, 3))
    const parts = new THREE.Points(pg2, new THREE.PointsMaterial({ color: 0x4080ff, size: 0.12, transparent: true, opacity: 0.7, sizeAttenuation: true })); scene.add(parts)

    let mx = 0, my = 0, tx = 0, ty = 0
    const onMove = e => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = (e.clientY / window.innerHeight - 0.5) * 2 }
    document.addEventListener('mousemove', onMove)

    const onResize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight
      camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    let t = 0, rafId
    const animate = () => {
      rafId = requestAnimationFrame(animate); t += 0.008
      tx += (mx - tx) * 0.04; ty += (my - ty) * 0.04
      group.rotation.y = tx * 0.3; group.rotation.x = ty * 0.2
      parts.rotation.y = t * 0.03
      objs.forEach(o => { o.m.rotation.x += o.rx; o.m.rotation.y += o.ry; o.m.position.y = o.oy + Math.sin(t + o.ph) * 0.35 })
      wm.position.copy(sm.position); wm.rotation.y = sm.rotation.y
      pb.intensity = 5 + Math.sin(t * 1.2) * 1.5
      pt.intensity = 4 + Math.cos(t * 0.9) * 1.5
      pg.intensity = 3 + Math.sin(t * 0.7 + 1) * 1.5
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} id="hero-canvas" />
}
