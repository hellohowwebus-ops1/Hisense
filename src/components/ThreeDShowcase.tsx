import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { 
  RotateCw, 
  Layers, 
  Eye, 
  Sliders, 
  Play, 
  Pause, 
  Plus, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Maximize2,
  ChevronRight,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product } from '../types';

export type ModelType = 'catheter' | 'pipette' | 'copper-t' | 'surgical' | 'autoclave';

interface ModelConfig {
  id: ModelType;
  title: string;
  category: string;
  shortSpec: string;
  description: string;
  specs: { label: string; val: string }[];
  matchedProductId: string;
  defaultCamDistance: number;
}

const MODEL_CONFIGS: Record<ModelType, ModelConfig> = {
  catheter: {
    id: 'catheter',
    title: 'Hisense EchoFlex™ IVF Catheter',
    category: 'IVF & ART CONSUMABLE',
    shortSpec: 'Outer Ø 4.5 Fr | MEA > 80%',
    description: 'Ultrasound-echogenic dual lumen catheter with soft atraumatic bulb tip and depth centimeter markers.',
    specs: [
      { label: 'Echogenicity', val: 'Tip-Enhanced Ultra-Clear' },
      { label: 'Length', val: '230 mm Guided' },
      { label: 'Endotoxin', val: '< 0.05 EU/device' },
    ],
    matchedProductId: 'prod-ivf-catheter',
    defaultCamDistance: 6.2,
  },
  pipette: {
    id: 'pipette',
    title: 'Hisense MicroPoint™ ICSI Needle & Cell',
    category: 'EMBRYOLOGY & MICROMANIPULATION',
    shortSpec: '30° Bevel Grind | Borosilicate 3.3',
    description: 'Precision bevelled glass injection needle and biomimetic oocyte demonstrating cellular penetration.',
    specs: [
      { label: 'Tip Bore', val: '4.8 µm Inner Ø' },
      { label: 'Bevel', val: '30° Spike Grind' },
      { label: 'Material', val: 'Glass 3.3' },
    ],
    matchedProductId: 'prod-icsi-pipette',
    defaultCamDistance: 5.6,
  },
  'copper-t': {
    id: 'copper-t',
    title: 'Hisense Cu-T 380A® Intrauterine Device',
    category: 'CONTRACEPTIVE LARC',
    shortSpec: '380 mm² Copper | WHO Standard',
    description: 'World-standard Copper T contraceptive device with coiled active copper surface and retrieval threads.',
    specs: [
      { label: 'Active Area', val: '380 mm² Copper' },
      { label: 'Efficacy', val: 'Up to 10 Years' },
      { label: 'Safety', val: 'WHO Compliant' },
    ],
    matchedProductId: 'prod-copper-t',
    defaultCamDistance: 5.4,
  },
  surgical: {
    id: 'surgical',
    title: 'Hisense LaparoGrip™ Surgical Tool',
    category: 'MINIMALLY INVASIVE SURGERY',
    shortSpec: 'Titanium Grade 5 | 360° Rotatable',
    description: 'Articulating laparoscopic grasping forceps with dielectric ceramic insulation tested to 4000V.',
    specs: [
      { label: 'Shaft', val: '5mm × 330mm' },
      { label: 'Rotation', val: '360° Indexing' },
      { label: 'Insulation', val: '4000V Dielectric' },
    ],
    matchedProductId: 'prod-laparoscopic-grasper',
    defaultCamDistance: 6.0,
  },
  autoclave: {
    id: 'autoclave',
    title: 'Hisense MedSteril-B23™ Autoclave',
    category: 'CSSD & STERILIZATION',
    shortSpec: '23 Litres | European Class-B',
    description: 'Triple fractionated pre-vacuum autoclave chamber with 304 stainless steel pressure vessel.',
    specs: [
      { label: 'Capacity', val: '23L Stainless 304' },
      { label: 'Cycle', val: 'Class-B Pre-Vacuum' },
      { label: 'Standard', val: 'EN 13060' },
    ],
    matchedProductId: 'prod-autoclave-23l',
    defaultCamDistance: 5.8,
  },
};

// Sub-component: Individual Interactive 3D Product Card
const Product3DCard: React.FC<{
  modelType: ModelType;
  onChangeModel?: (newModel: ModelType) => void;
  onSelectProductForRfq?: (productId: string) => void;
  availableOptions?: ModelType[];
}> = ({
  modelType,
  onChangeModel,
  onSelectProductForRfq,
  availableOptions,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'realistic' | 'xray' | 'wireframe'>('realistic');
  const [isRotating, setIsRotating] = useState(true);
  const [isExploded, setIsExploded] = useState(false);
  const config = MODEL_CONFIGS[modelType];

  // Three.js instances
  const animFrameRef = useRef<number>(0);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const explodedPartsRef = useRef<{ mesh: THREE.Object3D; basePos: THREE.Vector3; explodeDir: THREE.Vector3; distance: number }[]>([]);
  const targetExplodeRef = useRef<number>(0);
  const currentExplodeRef = useRef<number>(0);
  const isPointerDownRef = useRef(false);
  const pointerPosRef = useRef({ x: 0, y: 0 });
  const modelRotationRef = useRef({ x: 0.15, y: -0.3 });

  useEffect(() => {
    targetExplodeRef.current = isExploded ? 1 : 0;
  }, [isExploded]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 300;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf8fafc);
    scene.fog = new THREE.FogExp2(0xf8fafc, 0.025);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.2, config.defaultCamDistance);
    camera.lookAt(0, 0, 0);

    // 2. Renderer
    const isHeadless = navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Environment Reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // 4. Lighting Rig
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 7, 5);
    scene.add(keyLight);

    const fillLight = new THREE.HemisphereLight(0xffffff, 0xe2e8f0, 1.8);
    scene.add(fillLight);

    const cyanRim = new THREE.PointLight(0x0284c7, 2.8, 14);
    cyanRim.position.set(-5, -1, -3);
    scene.add(cyanRim);

    // 5. Contact Shadow & Floor Grid
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowCtx = shadowCanvas.getContext('2d');
    if (shadowCtx) {
      const grad = shadowCtx.createRadialGradient(64, 64, 5, 64, 64, 60);
      grad.addColorStop(0, 'rgba(15, 23, 42, 0.35)');
      grad.addColorStop(0.5, 'rgba(15, 23, 42, 0.1)');
      grad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      shadowCtx.fillStyle = grad;
      shadowCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.45;
    scene.add(shadowPlane);

    const gridHelper = new THREE.GridHelper(12, 16, 0x0284c7, 0xe2e8f0);
    gridHelper.position.y = -1.44;
    scene.add(gridHelper);

    // 6. Build Composite 3D Models
    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;
    scene.add(modelGroup);

    const explodedParts: { mesh: THREE.Object3D; basePos: THREE.Vector3; explodeDir: THREE.Vector3; distance: number }[] = [];

    // Helper material function
    const getMat = (base: THREE.Material): THREE.Material => {
      if (viewMode === 'wireframe') {
        return new THREE.MeshBasicMaterial({ color: 0x0284c7, wireframe: true });
      }
      if (viewMode === 'xray') {
        return new THREE.MeshPhysicalMaterial({
          color: 0x0ea5e9,
          transmission: 0.85,
          opacity: 0.45,
          transparent: true,
          roughness: 0.1,
          depthWrite: false,
        });
      }
      return base;
    };

    const medicalChrome = getMat(new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.95, roughness: 0.15 }));
    const medicalGold = getMat(new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.88, roughness: 0.2 }));
    const medicalCyan = getMat(new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.35 }));
    const glassMat = getMat(new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.92,
      ior: 1.5,
      roughness: 0.05,
      transparent: true,
      depthWrite: false,
    }));

    if (modelType === 'catheter') {
      // Guide Tube
      const guideMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.8, 24), glassMat);
      guideMesh.rotation.z = Math.PI / 2;
      modelGroup.add(guideMesh);
      explodedParts.push({ mesh: guideMesh, basePos: guideMesh.position.clone(), explodeDir: new THREE.Vector3(0, 0.5, 0), distance: 0.7 });

      // Core Tube
      const coreMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.065, 0.065, 5.6, 24),
        getMat(new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.3 }))
      );
      coreMesh.rotation.z = Math.PI / 2;
      coreMesh.position.set(0.3, 0, 0);
      modelGroup.add(coreMesh);
      explodedParts.push({ mesh: coreMesh, basePos: coreMesh.position.clone(), explodeDir: new THREE.Vector3(0, -0.5, 0), distance: 0.6 });

      // Echogenic Tip
      const tipMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 20, 20),
        getMat(new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.7, roughness: 0.2 }))
      );
      tipMesh.position.set(3.1, 0, 0);
      modelGroup.add(tipMesh);
      explodedParts.push({ mesh: tipMesh, basePos: tipMesh.position.clone(), explodeDir: new THREE.Vector3(1, 0, 0), distance: 1.0 });

      // Rings
      for (let i = 0; i < 5; i++) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.125, 0.015, 12, 20), medicalGold);
        ring.rotation.y = Math.PI / 2;
        ring.position.set(-0.8 + i * 0.7, 0, 0);
        modelGroup.add(ring);
      }

      // Hub & Wings
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.16, 1.0, 20), medicalCyan);
      hub.rotation.z = Math.PI / 2;
      hub.position.set(-2.8, 0, 0);
      modelGroup.add(hub);

      const wing = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.85, 0.12), medicalCyan);
      wing.position.set(-2.95, 0, 0);
      modelGroup.add(wing);

    } else if (modelType === 'pipette') {
      // Oocyte Outer
      const zona = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), glassMat);
      modelGroup.add(zona);
      explodedParts.push({ mesh: zona, basePos: zona.position.clone(), explodeDir: new THREE.Vector3(0, 0.8, 0), distance: 0.9 });

      // Cytoplasm
      const cyto = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 24, 24),
        getMat(new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transmission: 0.7, roughness: 0.25, transparent: true }))
      );
      modelGroup.add(cyto);

      // Nucleus
      const nuc = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 20, 20),
        getMat(new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x0891b2, emissiveIntensity: 0.5 }))
      );
      nuc.position.set(0.25, 0.15, 0.2);
      modelGroup.add(nuc);

      // ICSI Needle
      const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 2.8, 20), glassMat);
      needle.rotation.z = Math.PI / 2;
      needle.position.set(2.8, 0, 0);
      modelGroup.add(needle);
      explodedParts.push({ mesh: needle, basePos: needle.position.clone(), explodeDir: new THREE.Vector3(1, 0, 0), distance: 1.2 });

      // Spike Tip
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.55, 20), medicalChrome);
      spike.rotation.z = -Math.PI / 2;
      spike.position.set(1.2, 0, 0);
      modelGroup.add(spike);

      // Holding Pipette
      const holding = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 2.2, 24), glassMat);
      holding.rotation.z = Math.PI / 2;
      holding.position.set(-2.5, 0, 0);
      modelGroup.add(holding);
      explodedParts.push({ mesh: holding, basePos: holding.position.clone(), explodeDir: new THREE.Vector3(-1, 0, 0), distance: 1.2 });

    } else if (modelType === 'copper-t') {
      // 3. COPPER T 380A CONTRACEPTIVE DEVICE
      // White Polyethylene Vertical Stem
      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.09, 0.09, 3.2, 24),
        getMat(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 }))
      );
      stem.position.set(0, -0.2, 0);
      modelGroup.add(stem);

      // Curved Horizontal Flexible Arms
      const armLeft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.5, 20),
        getMat(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 }))
      );
      armLeft.rotation.z = Math.PI / 2;
      armLeft.position.set(-0.75, 1.4, 0);
      modelGroup.add(armLeft);

      const armRight = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.5, 20),
        getMat(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35 }))
      );
      armRight.rotation.z = Math.PI / 2;
      armRight.position.set(0.75, 1.4, 0);
      modelGroup.add(armRight);

      // Atraumatic Arm Tip Bulbs
      const bulbL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), getMat(new THREE.MeshStandardMaterial({ color: 0xffffff })));
      bulbL.position.set(-1.5, 1.4, 0);
      modelGroup.add(bulbL);

      const bulbR = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), getMat(new THREE.MeshStandardMaterial({ color: 0xffffff })));
      bulbR.position.set(1.5, 1.4, 0);
      modelGroup.add(bulbR);

      // Pure Copper Wire Coil (Stem)
      const copperMat = getMat(new THREE.MeshStandardMaterial({ color: 0xb87333, metalness: 0.92, roughness: 0.2 }));
      const stemCopper = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.115, 2.0, 24), copperMat);
      stemCopper.position.set(0, 0.1, 0);
      modelGroup.add(stemCopper);
      explodedParts.push({ mesh: stemCopper, basePos: stemCopper.position.clone(), explodeDir: new THREE.Vector3(0, 0, 0.6), distance: 0.7 });

      // Copper Sleeves on Arms (380A Specification)
      const sleeveL = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.7, 20), copperMat);
      sleeveL.rotation.z = Math.PI / 2;
      sleeveL.position.set(-0.7, 1.4, 0);
      modelGroup.add(sleeveL);

      const sleeveR = new THREE.Mesh(new THREE.CylinderGeometry(0.105, 0.105, 0.7, 20), copperMat);
      sleeveR.rotation.z = Math.PI / 2;
      sleeveR.position.set(0.7, 1.4, 0);
      modelGroup.add(sleeveR);

      // Retrieval Nylon Thread Loop
      const threadMat = getMat(new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.2 }));
      const thread1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.8, 8), threadMat);
      thread1.position.set(-0.06, -2.4, 0);
      thread1.rotation.z = -0.06;
      modelGroup.add(thread1);

      const thread2 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.8, 8), threadMat);
      thread2.position.set(0.06, -2.4, 0);
      thread2.rotation.z = 0.06;
      modelGroup.add(thread2);

    } else if (modelType === 'surgical') {
      // 4. SURGICAL LAPAROSCOPIC INSTRUMENT
      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(0.11, 0.11, 5.2, 24),
        getMat(new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.4, metalness: 0.8 }))
      );
      shaft.rotation.z = Math.PI / 2;
      shaft.position.set(0.2, 0, 0);
      modelGroup.add(shaft);

      // Jaws
      const jawTop = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 0.12), medicalChrome);
      jawTop.position.set(3.2, 0.15, 0);
      jawTop.rotation.z = 0.25;
      modelGroup.add(jawTop);
      explodedParts.push({ mesh: jawTop, basePos: jawTop.position.clone(), explodeDir: new THREE.Vector3(0.5, 0.5, 0), distance: 0.8 });

      const jawBtm = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 0.12), medicalChrome);
      jawBtm.position.set(3.2, -0.15, 0);
      jawBtm.rotation.z = -0.25;
      modelGroup.add(jawBtm);
      explodedParts.push({ mesh: jawBtm, basePos: jawBtm.position.clone(), explodeDir: new THREE.Vector3(0.5, -0.5, 0), distance: 0.8 });

      // Collar
      const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.55, 24), medicalGold);
      collar.rotation.z = Math.PI / 2;
      collar.position.set(-2.2, 0, 0);
      modelGroup.add(collar);

      // Grip
      const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, 1.8, 20), medicalCyan);
      grip.rotation.z = 0.45;
      grip.position.set(-3.0, -0.8, 0);
      modelGroup.add(grip);

    } else if (modelType === 'autoclave') {
      // 5. AUTOCLAVE STERILIZER
      const vessel = new THREE.Mesh(
        new THREE.CylinderGeometry(1.2, 1.2, 3.2, 32),
        getMat(new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.2 }))
      );
      vessel.rotation.z = Math.PI / 2;
      modelGroup.add(vessel);

      const doorRim = new THREE.Mesh(new THREE.TorusGeometry(1.28, 0.1, 16, 32), medicalChrome);
      doorRim.rotation.y = Math.PI / 2;
      doorRim.position.set(1.5, 0, 0);
      modelGroup.add(doorRim);
      explodedParts.push({ mesh: doorRim, basePos: doorRim.position.clone(), explodeDir: new THREE.Vector3(0.6, 0, 0), distance: 0.7 });

      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.06, 12, 24), medicalChrome);
      wheel.rotation.y = Math.PI / 2;
      wheel.position.set(1.7, 0, 0);
      modelGroup.add(wheel);
    }

    explodedPartsRef.current = explodedParts;

    // 7. Pointer Interactions
    const onPointerDown = (e: PointerEvent) => {
      isPointerDownRef.current = true;
      pointerPosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isPointerDownRef.current) return;
      const dx = e.clientX - pointerPosRef.current.x;
      const dy = e.clientY - pointerPosRef.current.y;
      pointerPosRef.current = { x: e.clientX, y: e.clientY };

      modelRotationRef.current.y += dx * 0.008;
      modelRotationRef.current.x += dy * 0.008;
      modelRotationRef.current.x = Math.max(-0.6, Math.min(0.6, modelRotationRef.current.x));
    };

    const onPointerUp = () => {
      isPointerDownRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 8. Render Animation Loop
    let clock = new THREE.Clock();
    const render = () => {
      animFrameRef.current = requestAnimationFrame(render);
      const delta = clock.getDelta();

      // Auto-rotation when not dragging
      if (isRotating && !isPointerDownRef.current) {
        modelRotationRef.current.y += delta * 0.55;
      }

      if (modelGroupRef.current) {
        modelGroupRef.current.rotation.y = modelRotationRef.current.y;
        modelGroupRef.current.rotation.x = modelRotationRef.current.x;

        // Subtle floating motion
        const time = clock.getElapsedTime();
        modelGroupRef.current.position.y = Math.sin(time * 1.5) * 0.06;
      }

      // Smooth Exploded Animation
      currentExplodeRef.current += (targetExplodeRef.current - currentExplodeRef.current) * 0.08;
      const ratio = currentExplodeRef.current;

      explodedPartsRef.current.forEach((part) => {
        part.mesh.position.copy(part.basePos).addScaledVector(part.explodeDir, part.distance * ratio);
      });

      renderer.render(scene, camera);
    };

    render();

    // 9. Resize Handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);

      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [modelType, viewMode, isRotating]);

  return (
    <div className="group bg-white rounded-3xl border border-slate-200/90 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Card Header */}
      <div className="p-5 pb-3 border-b border-slate-100 flex items-start justify-between gap-3 bg-slate-50/60">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-800">
              {config.category}
            </span>
          </div>
          <h3 className="text-base font-bold text-[#0f2a44] leading-tight line-clamp-1">
            {config.title}
          </h3>
          <span className="text-xs font-mono text-slate-500 font-medium">
            {config.shortSpec}
          </span>
        </div>

        {/* Optional Model Selector for this card */}
        {availableOptions && onChangeModel && (
          <select
            value={modelType}
            onChange={(e) => onChangeModel(e.target.value as ModelType)}
            className="text-[11px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:border-cyan-600 cursor-pointer shadow-2xs"
          >
            {availableOptions.map((opt) => (
              <option key={opt} value={opt}>
                {MODEL_CONFIGS[opt].title.replace('Hisense ', '')}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* 3D WebGL Canvas Viewport */}
      <div className="relative w-full h-[320px] bg-[#f8fafc] cursor-grab active:cursor-grabbing overflow-hidden">
        <div ref={mountRef} className="w-full h-full" />

        {/* Top-Right Micro Overlay Controls */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`p-1.5 rounded-lg border text-xs font-bold transition-all shadow-xs ${
              isRotating
                ? 'bg-cyan-50 text-cyan-800 border-cyan-300'
                : 'bg-white text-slate-600 border-slate-200'
            }`}
            title="Toggle 360° Spin"
          >
            {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold transition-all shadow-xs flex items-center gap-1 ${
              isExploded
                ? 'bg-[#0f2a44] text-white border-[#0f2a44]'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
            title="Exploded Assembly View"
          >
            <Layers className="w-3 h-3 text-cyan-600" />
            <span>Explode</span>
          </button>
        </div>

        {/* Bottom Shading Mode Pills */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 bg-white/90 p-1 rounded-lg border border-slate-200 shadow-xs backdrop-blur-xs">
          {(['realistic', 'xray', 'wireframe'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`px-2 py-0.5 text-[10px] font-bold rounded capitalize transition ${
                viewMode === mode
                  ? 'bg-[#0f2a44] text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Drag Hint */}
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400 bg-white/80 px-2 py-0.5 rounded border border-slate-200/80 pointer-events-none hidden sm:block">
          Drag to 360° Rotate
        </div>
      </div>

      {/* Card Body & Specs */}
      <div className="p-5">
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
          {config.description}
        </p>

        {/* Specs Row */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 text-center">
          {config.specs.map((sp, i) => (
            <div key={i} className="bg-slate-50 p-2 rounded-xl border border-slate-100">
              <span className="block text-[10px] font-mono text-slate-400 uppercase">{sp.label}</span>
              <strong className="text-xs text-[#0f2a44] font-mono font-bold truncate block">{sp.val}</strong>
            </div>
          ))}
        </div>

        {/* Card Actions */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-100">
          <button
            onClick={() => {
              if (onSelectProductForRfq) {
                onSelectProductForRfq(config.matchedProductId);
              }
            }}
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#0f2a44] hover:bg-[#153a5c] text-white text-xs font-black flex items-center justify-center gap-1.5 transition shadow-sm cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 text-cyan-400" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

    </div>
  );
};

// Main Section Component: 3 Separate 3D Products in a clean Grid
interface ThreeDShowcaseProps {
  initialModel?: 'catheter' | 'pipette' | 'surgical' | 'autoclave' | 'copper-t';
  onSelectProductForRfq?: (modelKey: string) => void;
  className?: string;
}

export const ThreeDShowcase: React.FC<ThreeDShowcaseProps> = ({
  onSelectProductForRfq,
  className = '',
}) => {
  // State for the 3rd customizable card
  const [thirdCardModel, setThirdCardModel] = useState<ModelType>('copper-t');

  const handleAddToCart = (productId: string) => {
    if (onSelectProductForRfq) {
      const prod = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
      onSelectProductForRfq(prod.model3dKey || 'catheter');
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      
      {/* 3 Separate 3D Product Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* 3D Model 1: IVF Catheter */}
        <Product3DCard
          modelType="catheter"
          onSelectProductForRfq={handleAddToCart}
        />

        {/* 3D Model 2: ICSI Needle & Oocyte Cell */}
        <Product3DCard
          modelType="pipette"
          onSelectProductForRfq={handleAddToCart}
        />

        {/* 3D Model 3: Contraceptive Copper-T / Surgical Tool / Autoclave */}
        <Product3DCard
          modelType={thirdCardModel}
          onChangeModel={(m) => setThirdCardModel(m)}
          availableOptions={['copper-t', 'surgical', 'autoclave']}
          onSelectProductForRfq={handleAddToCart}
        />

      </div>

      {/* Bottom Technical Assurance Bar */}
      <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <Sparkles className="w-4 h-4 text-cyan-600" />
          <span className="font-semibold text-[#0f2a44]">Real-time WebGL Engine:</span>
          <span className="text-slate-500">Sub-micron CAD meshes, PBR physics shaders, 360° interactive inspection.</span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-600">
          <span className="text-emerald-700 font-bold">✓ 3 Independent Interactive Viewports</span>
          <span>·</span>
          <span>Class 10,000 Cleanroom Certified</span>
        </div>
      </div>

    </div>
  );
};
