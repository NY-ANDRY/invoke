

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

const CursorFollower = () => {
    const containerRef = useRef(null);
    const rendererRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Créer le renderer une seule fois et le conserver entre les montées/démontées
        if (!rendererRef.current) {
            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            containerRef.current.appendChild(renderer.domElement);
            rendererRef.current = renderer; // Conserver la référence
        }

        const animate = () => {
            requestAnimationFrame(animate);
            rendererRef.current.render(scene, camera);
        };
        animate();

        camera.position.z = 5; // Positionner la caméra

        // Fonction pour ajouter et animer les cubes
        const createCube = (e) => {
            const cube = new THREE.Mesh(
                new THREE.BoxGeometry(0.09, 0.09, 0.09), // taille du cube
                new THREE.MeshBasicMaterial({ color: 0x1138FF, wireframe: true })
            );

            const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

            cube.position.set(
                Math.min(Math.max(mouseX * 5, -5), 5),
                Math.min(Math.max(mouseY * 5, -5), 5),
                0
            );
            scene.add(cube);

            gsap.to(cube.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    scene.remove(cube);
                    cube.geometry.dispose();
                    cube.material.dispose();
                }
            });
        };

        window.addEventListener("mousemove", createCube);

        return () => {
            window.removeEventListener("mousemove", createCube);
            if (rendererRef.current) {
                rendererRef.current.dispose();
            }
        };
    }, []);

    return <div ref={containerRef} className="absolute top-0 left-0 pointer-events-none" />;
};

export default CursorFollower;
