import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

let cubos = [];

const geometry = new THREE.BoxGeometry( 14, 6, 4 );
const material = new THREE.MeshBasicMaterial( { wireframe: true }, { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

for (let i = 0; i < 10; i++) {
	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const randomColor = Math.floor(Math.random() * 9999999); 
    const material = new THREE.MeshBasicMaterial({ color: randomColor });
	const cube = new THREE.Mesh( geometry, material );
	scene.add( cube );
	cubos.push(cube);
}
// const material2 = new THREE.MeshBasicMaterial( { color: 0x775465 } );
// const cube2 = new THREE.Mesh( geometry, material2 );
// scene.add( cube2 );
// cubos.push(cube2);

camera.position.z = 10;
// let vx = 0.05;
// let vy = 0.001;
// let vz = 0.01;

// let vx2 = 0.01;
// let vy2 = 0.05;
// let vz2 = 0.001;

let velocidades = [];

for (let i = 0; i < cubos.length; i++) {
	let velocidade = [
		5.0*(2.0*Math.random()-1.0)/100,
		5.0*(2.0*Math.random()-1.0)/100,
		5.0*(2.0*Math.random()-1.0)/100]
	velocidades.push(velocidade);
}

// let v1 = [0.05, 0.001, 0.01];
// velocidades.push(v1);

// let v2 = [0.01, 0.05, 0.001];
// velocidades.push(v2);

function animate() {
	
	
	
	for (let i = 0; i < cubos.length; i++) {
		cubos[i].rotation.x += 0.01;
		cubos[i].rotation.y += 0.01;
		cubos[i].rotation.x += 0.01;
		cubos[i].rotation.y += 0.01;

		cubos[i].position.x += velocidades[i][0];
		cubos[i].position.y += velocidades[i][1];
		cubos[i].position.z += velocidades[i][2];

		if (cubos[i].position.x > 6 || cubos[i].position.x < -6) {
			velocidades[i][0] = -velocidades[i][0];
		}
		
		if (cubos[i].position.y > 3 || cubos[i].position.y < -3) {
			velocidades[i][1] = -velocidades[i][1];
		}
		
		if (cubos[i].position.z > 2 || cubos[i].position.z < -2) {
			velocidades[i][2] = -velocidades[i][2];
		}
	}

	
	console.log('vetor 1', velocidades[0]);
	console.log('vetor 2', velocidades[1]);
	renderer.render( scene, camera );
	
}

renderer.setAnimationLoop( animate );