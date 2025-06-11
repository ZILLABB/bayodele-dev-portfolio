'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface AIToolsVisualizationProps {
  className?: string;
  tools?: Array<{
    name: string;
    level: number;
    color: string;
  }>;
}

const defaultTools = [
  { name: 'Cursor', level: 98, color: '#3b82f6' },
  { name: 'Augment', level: 95, color: '#8b5cf6' },
  { name: 'Windsurf', level: 92, color: '#06b6d4' },
  { name: 'AI Prompting', level: 99, color: '#10b981' },
];

export default function AIToolsVisualization({ 
  className = '', 
  tools = defaultTools 
}: AIToolsVisualizationProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    // Intersection Observer to start animation when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isVisible || isMobile) return;

    const rect = mountRef.current.getBoundingClientRect();
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create AI tool representations
    const toolMeshes: Array<{
      mesh: THREE.Mesh;
      targetScale: number;
      currentScale: number;
      tool: typeof tools[0];
      particles: THREE.Points;
    }> = [];

    tools.forEach((tool, index) => {
      // Main tool representation - glowing sphere
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color(tool.color),
        transparent: true,
        opacity: 0.8,
        wireframe: false
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // Position tools in a circle
      const angle = (index / tools.length) * Math.PI * 2;
      const radius = 4;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.z = Math.sin(angle) * radius;
      mesh.position.y = 0;
      
      // Scale based on proficiency level
      const targetScale = (tool.level / 100) * 1.5 + 0.5;
      mesh.scale.setScalar(0.1); // Start small
      
      scene.add(mesh);

      // Create particle system around each tool
      const particleCount = 50;
      const particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      
      const toolColor = new THREE.Color(tool.color);
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Random positions around the tool
        const spherical = new THREE.Spherical(
          Math.random() * 2 + 1,
          Math.random() * Math.PI,
          Math.random() * Math.PI * 2
        );
        const vector = new THREE.Vector3().setFromSpherical(spherical);
        
        positions[i3] = vector.x;
        positions[i3 + 1] = vector.y;
        positions[i3 + 2] = vector.z;
        
        colors[i3] = toolColor.r;
        colors[i3 + 1] = toolColor.g;
        colors[i3 + 2] = toolColor.b;
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      particles.position.copy(mesh.position);
      scene.add(particles);

      toolMeshes.push({
        mesh,
        targetScale,
        currentScale: 0.1,
        tool,
        particles
      });
    });

    // Camera positioning
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, 0);

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let startTime = Date.now();
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      const elapsed = (Date.now() - startTime) / 1000;

      toolMeshes.forEach((toolData, index) => {
        const { mesh, targetScale, particles, tool } = toolData;
        
        // Animate scale growth
        if (toolData.currentScale < targetScale) {
          toolData.currentScale += (targetScale - toolData.currentScale) * 0.02;
          mesh.scale.setScalar(toolData.currentScale);
        }
        
        // Rotation
        mesh.rotation.y += 0.01;
        mesh.rotation.x = Math.sin(time + index) * 0.1;
        
        // Floating motion
        mesh.position.y = Math.sin(time * 0.5 + index) * 0.3;
        
        // Particle animation
        const positions = particles.geometry.attributes.position.array as Float32Array;
        for (let i = 0; i < positions.length; i += 3) {
          const particleIndex = i / 3;
          
          // Rotate particles around the tool
          const angle = time * 0.5 + particleIndex * 0.1;
          const radius = 1.5 + Math.sin(time + particleIndex) * 0.5;
          
          positions[i] = Math.cos(angle) * radius;
          positions[i + 1] = Math.sin(time + particleIndex) * 0.5;
          positions[i + 2] = Math.sin(angle) * radius;
        }
        particles.geometry.attributes.position.needsUpdate = true;
        particles.position.copy(mesh.position);
        
        // Glow effect based on proficiency
        const glowIntensity = (tool.level / 100) * 0.5 + 0.5;
        (mesh.material as THREE.MeshBasicMaterial).opacity = 0.6 + Math.sin(time * 2) * 0.2 * glowIntensity;
      });

      // Camera follows mouse slightly
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 + 3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer || !mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      camera.aspect = rect.width / rect.height;
      camera.updateProjectionMatrix();
      renderer.setSize(rect.width, rect.height);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      toolMeshes.forEach(({ mesh, particles }) => {
        if (mesh.geometry) mesh.geometry.dispose();
        if (mesh.material) {
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach(material => material.dispose());
          } else {
            mesh.material.dispose();
          }
        }
        if (particles.geometry) particles.geometry.dispose();
        if (particles.material) {
          if (Array.isArray(particles.material)) {
            particles.material.forEach(material => material.dispose());
          } else {
            particles.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [isVisible, tools, isMobile]);

  return (
    <div 
      ref={mountRef} 
      className={`relative h-64 w-full ${className}`}
    >
      {isMobile && (
        <div className="flex items-center justify-center h-full text-muted-foreground">
          <p className="text-sm">3D visualization available on desktop</p>
        </div>
      )}
    </div>
  );
}
