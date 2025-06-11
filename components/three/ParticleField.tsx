'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleFieldProps {
  className?: string;
  particleCount?: number;
}

export default function ParticleField({ 
  className = '', 
  particleCount = 1000 
}: ParticleFieldProps) {
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
      antialias: false, // Disable for better performance
      powerPreference: "high-performance"
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create particle system
    const adjustedParticleCount = window.innerWidth < 768 ? particleCount / 2 : particleCount;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(adjustedParticleCount * 3);
    const colors = new Float32Array(adjustedParticleCount * 3);
    const velocities = new Float32Array(adjustedParticleCount * 3);

    // AI-themed color palette
    const colorPalette = [
      new THREE.Color(0x3b82f6), // Blue
      new THREE.Color(0x8b5cf6), // Purple
      new THREE.Color(0x06b6d4), // Cyan
      new THREE.Color(0x10b981), // Emerald
      new THREE.Color(0xf59e0b), // Amber
    ];

    for (let i = 0; i < adjustedParticleCount; i++) {
      const i3 = i * 3;

      // Random positions
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      // Random velocities
      velocities[i3] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

      // Random colors from palette
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle material
    const particleMaterial = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Camera positioning
    camera.position.z = 50;

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

      const positions = particleSystem.geometry.attributes.position.array as Float32Array;

      // Update particle positions
      for (let i = 0; i < adjustedParticleCount; i++) {
        const i3 = i * 3;

        // Move particles
        positions[i3] += velocities[i3];
        positions[i3 + 1] += velocities[i3 + 1];
        positions[i3 + 2] += velocities[i3 + 2];

        // Wrap around screen
        if (positions[i3] > 50) positions[i3] = -50;
        if (positions[i3] < -50) positions[i3] = 50;
        if (positions[i3 + 1] > 50) positions[i3 + 1] = -50;
        if (positions[i3 + 1] < -50) positions[i3 + 1] = 50;
        if (positions[i3 + 2] > 50) positions[i3 + 2] = -50;
        if (positions[i3 + 2] < -50) positions[i3 + 2] = 50;

        // Mouse interaction - attract particles to mouse
        const mouseInfluence = 0.0001;
        const dx = mouse.x * 50 - positions[i3];
        const dy = mouse.y * 50 - positions[i3 + 1];
        
        velocities[i3] += dx * mouseInfluence;
        velocities[i3 + 1] += dy * mouseInfluence;

        // Add some damping
        velocities[i3] *= 0.99;
        velocities[i3 + 1] *= 0.99;
        velocities[i3 + 2] *= 0.99;
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;

      // Rotate particle system slowly
      particleSystem.rotation.y += 0.001;

      // Camera follows mouse slightly
      camera.position.x += (mouse.x * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 5 - camera.position.y) * 0.05;

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
      particles.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [particleCount]);

  return (
    <div 
      ref={mountRef} 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
