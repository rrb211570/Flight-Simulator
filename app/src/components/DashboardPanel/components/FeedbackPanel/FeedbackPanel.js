import { useEffect, useState } from 'react';
import * as THREE from 'three';
import './FeedbackPanel.css';

function FeedbackPanel() {
    useEffect(() => {
        let feedbackPanel = document.querySelector('#feedbackPanel');
        let feedbackPanelWidth = parseInt(feedbackPanel.offsetWidth, 10);
        let feedbackPanelHeight = parseInt(feedbackPanel.offsetHeight, 10);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, feedbackPanelWidth / feedbackPanelHeight, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(feedbackPanelWidth, feedbackPanelHeight);
        document.querySelector('#feedbackPanel__canvas').appendChild(renderer.domElement);

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
        return () => document.querySelector('#feedbackPanel__canvas').removeChild(renderer.domElement); // cleanup for strict mode
    }, [])

    return (
        <div id='feedbackPanel'>
            <div id='feedbackPanel__canvas'></div>
        </div>
    )
}

export {FeedbackPanel};