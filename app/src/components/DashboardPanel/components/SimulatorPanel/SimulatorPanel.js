import { useEffect, useState } from 'react';
import * as THREE from 'three';
import './SimulatorPanel.css';

function SimulatorPanel() {
    useEffect(() => {
        let simulatorPanel = document.querySelector('#simulatorPanel');
        let simulatorPanelWidth = parseInt(simulatorPanel.offsetWidth, 10);
        let simulatorPanelHeight = parseInt(simulatorPanel.offsetHeight, 10);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, simulatorPanelWidth / simulatorPanelHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(simulatorPanelWidth, simulatorPanelHeight);
        document.querySelector('#simulatorPanel__canvas').appendChild(renderer.domElement);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
        const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        scene.add(light);

        camera.position.z = 5;

        let animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        return () => document.querySelector('#simulatorPanel__canvas').removeChild(renderer.domElement);
    }, [])

    return (
        <div id='simulatorPanel'>
            <div id='simulatorPanel__canvas'></div>
        </div>
    )
}

export { SimulatorPanel };