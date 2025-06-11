'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ProjectCard3DProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export default function ProjectCard3D({ 
  children, 
  className = '', 
  index = 0 
}: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    if (!mountRef.current || isMobile) return; // Skip 3D on mobile for performance

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

    // Create floating elements around the card
    const geometries = [
      new THREE.SphereGeometry(0.1, 16, 16),
      new THREE.BoxGeometry(0.15, 0.15, 0.15),
      new THREE.OctahedronGeometry(0.12),
    ];

    const colors = [0x3b82f6, 0x8b5cf6, 0x06b6d4, 0x10b981];
    const floatingElements: THREE.Mesh[] = [];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.6,
        wireframe: Math.random() > 0.5
      });
      
      const element = new THREE.Mesh(geometry, material);
      
      // Position around the edges
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3;
      element.position.x = Math.cos(angle) * radius;
      element.position.y = Math.sin(angle) * radius;
      element.position.z = (Math.random() - 0.5) * 2;
      
      floatingElements.push(element);
      scene.add(element);
    }

    // Camera positioning
    camera.position.z = 8;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
      cardRef.current.addEventListener('mouseenter', handleMouseEnter);
      cardRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animate floating elements
      floatingElements.forEach((element, i) => {
        const time = Date.now() * 0.001;
        
        // Rotation
        element.rotation.x += 0.01;
        element.rotation.y += 0.015;
        
        // Floating motion
        const baseY = Math.sin((time + i) * 0.5) * 0.2;
        const baseX = Math.cos((time + i) * 0.3) * 0.1;
        
        if (isHovered) {
          // More dynamic movement on hover
          element.position.y += (baseY * 2 - element.position.y) * 0.1;
          element.position.x += (baseX * 2 - element.position.x) * 0.1;
          
          // Move towards mouse
          element.position.x += mouse.x * 0.5;
          element.position.y += mouse.y * 0.5;
        } else {
          // Gentle floating
          element.position.y += (baseY - element.position.y) * 0.05;
          element.position.x += (baseX - element.position.x) * 0.05;
        }
      });

      // Camera movement based on hover and mouse
      if (isHovered) {
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.1;
        camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.1;
      } else {
        camera.position.x += (0 - camera.position.x) * 0.05;
        camera.position.y += (0 - camera.position.y) * 0.05;
      }

      camera.lookAt(scene.position);
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
      window.removeEventListener('resize', handleResize);
      
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
        cardRef.current.removeEventListener('mouseenter', handleMouseEnter);
        cardRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of Three.js objects
      floatingElements.forEach(element => {
        if (element.geometry) element.geometry.dispose();
        if (element.material) {
          if (Array.isArray(element.material)) {
            element.material.forEach(material => material.dispose());
          } else {
            element.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [isHovered, isMobile]);

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: isHovered && !isMobile ? 'translateZ(20px)' : 'translateZ(0)',
        transition: 'transform 0.3s ease-out'
      }}
    >
      {/* 3D Canvas - only on desktop */}
      {!isMobile && (
        <div 
          ref={mountRef} 
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}
      
      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
