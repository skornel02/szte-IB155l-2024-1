import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 800 / 600, 0.1, 1000 );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 600 );

function animate() {
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

document.body.appendChild( renderer.domElement );