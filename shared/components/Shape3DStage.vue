<template>
  <section class="shape-3d-stage" :aria-label="ariaLabel">
    <canvas ref="canvasRef" />
    <div class="shape-3d-copy">
      <span>{{ kicker }}</span>
      <strong>{{ title }}</strong>
      <small>{{ detail }}</small>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as THREE from 'three'

defineProps({
  ariaLabel: { type: String, default: '3D shape scene' },
  kicker: { type: String, default: '3D stage' },
  title: { type: String, default: 'Modular shapes' },
  detail: { type: String, default: 'A lightweight scene for high-impact slides.' }
})

const canvasRef = ref(null)

let animationFrame = 0
let renderer
let resizeObserver

onMounted(() => {
  const canvas = canvasRef.value
  const host = canvas?.parentElement
  if (!canvas || !host) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
  camera.position.set(0, 0.8, 6)

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  const group = new THREE.Group()
  group.position.set(-0.2, 0.62, 0)
  group.scale.setScalar(0.72)
  scene.add(group)

  const materialA = new THREE.MeshStandardMaterial({
    color: 0x47b8ff,
    metalness: 0.32,
    roughness: 0.34
  })
  const materialB = new THREE.MeshStandardMaterial({
    color: 0x38d996,
    metalness: 0.18,
    roughness: 0.42
  })
  const materialC = new THREE.MeshStandardMaterial({
    color: 0xc084fc,
    metalness: 0.24,
    roughness: 0.38
  })

  const cube = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.05, 1.05), materialA)
  cube.position.set(-1.35, 0.12, 0)
  cube.rotation.set(0.35, 0.45, 0.1)
  group.add(cube)

  const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(0.46, 0.14, 96, 14), materialB)
  knot.position.set(0.22, -0.02, 0.25)
  group.add(knot)

  const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(0.66, 0), materialC)
  ico.position.set(1.45, 0.32, -0.1)
  group.add(ico)

  const light = new THREE.DirectionalLight(0xffffff, 2.6)
  light.position.set(3, 4, 5)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0x9cc9ff, 1.1))

  const resize = () => {
    const rect = host.getBoundingClientRect()
    const width = Math.max(1, rect.width)
    const height = Math.max(1, rect.height)
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
  }

  resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(host)
  resize()

  const animate = () => {
    group.rotation.y += 0.006
    cube.rotation.x += 0.004
    knot.rotation.z -= 0.008
    ico.rotation.x -= 0.005
    renderer.render(scene, camera)
    animationFrame = requestAnimationFrame(animate)
  }
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame)
  resizeObserver?.disconnect()
  renderer?.dispose()
})
</script>
