'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeBackgroundProps {
  className?: string;
}

export default function ThreeBackground({ className = '' }: ThreeBackgroundProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 32, 32),
      new THREE.ConeGeometry(0.5, 1, 32),
      new THREE.OctahedronGeometry(0.7),
      new THREE.TetrahedronGeometry(0.8),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.3 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.25 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.2 
      }),
    ];

    const shapes: THREE.Mesh[] = [];
    const shapeCount = window.innerWidth < 768 ? 15 : 25; // Fewer shapes on mobile

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const shape = new THREE.Mesh(geometry, material);

      // Random positioning
      shape.position.x = (Math.random() - 0.5) * 50;
      shape.position.y = (Math.random() - 0.5) * 50;
      shape.position.z = (Math.random() - 0.5) * 50;

      // Random rotation
      shape.rotation.x = Math.random() * Math.PI;
      shape.rotation.y = Math.random() * Math.PI;
      shape.rotation.z = Math.random() * Math.PI;

      // Random scale
      const scale = Math.random() * 0.5 + 0.5;
      shape.scale.setScalar(scale);

      shapes.push(shape);
      scene.add(shape);
    }

    // Camera positioning
    camera.position.z = 30;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.005 + index * 0.0001;
        shape.rotation.y += 0.003 + index * 0.0001;
        shape.rotation.z += 0.002 + index * 0.0001;

        // Floating animation
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
      });

      // Camera follows mouse slightly
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
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
      shapes.forEach(shape => {
        if (shape.geometry) shape.geometry.dispose();
        if (shape.material) {
          if (Array.isArray(shape.material)) {
            shape.material.forEach(material => material.dispose());
          } else {
            shape.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}
