'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function MotorcycleModel({ mouseX = 0, mouseY = 0, isHovered = false }) {
  const group = useRef();
  const { scene } = useGLTF('/models/motorcycle.glb');

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;

          // Enhance materials with realistic metallic and clearcoat gloss
          if (child.material) {
            child.material.roughness = Math.min(child.material.roughness || 0.4, 0.45);
            child.material.metalness = Math.max(child.material.metalness || 0.6, 0.65);
            child.material.envMapIntensity = 1.4;

            // Highlight red paint components or chrome parts
            const name = (child.name || '').toLowerCase();
            const matName = (child.material.name || '').toLowerCase();

            if (name.includes('body') || name.includes('fairing') || matName.includes('red') || matName.includes('paint')) {
              child.material.color = new THREE.Color('#E31E24');
              child.material.roughness = 0.2;
              child.material.metalness = 0.3;
            }
          }
        }
      });
    }
  }, [scene]);

  useFrame((state, delta) => {
    if (group.current) {
      // Gentle continuous idle 360-degree rotation when not hovered
      if (!isHovered) {
        group.current.rotation.y += delta * 0.45;
      } else {
        // Subtle interactive mouse reaction
        const targetRotY = mouseX * 0.5;
        const targetRotX = mouseY * 0.2;
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotY, 0.05);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotX, 0.05);
      }

      // Gentle floating suspension breathing effect
      const t = state.clock.getElapsedTime();
      group.current.position.y = -0.65 + Math.sin(t * 1.5) * 0.025;
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      scale={1.4}
      position={[0, -0.65, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    />
  );
}

useGLTF.preload('/models/motorcycle.glb');
