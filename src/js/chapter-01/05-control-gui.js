import * as THREE from 'three';
import stats from '../util/stats';
import dat from 'dat-gui';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xEEEEEE));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

const axes = new THREE.AxisHelper(20);
scene.add(axes);

const planeGeometry = new THREE.PlaneGeometry(60, 20);
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;

plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.receiveShadow = true;
cube.position.x = -4;
cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x7777ff });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.receiveShadow = true;
sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = 2;

scene.add(sphere);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

const ambientLight = new THREE.AmbientLight(0x0c0c0c);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(-20, 30, -5);
spotLight.castShadow = true;
scene.add(spotLight);

document.getElementById('output').appendChild(renderer.domElement);

let step = 0;

const controls = new function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.03;
  this.cameraPositionX = -30;
  this.cameraPositionY = 40;
  this.cameraPositionZ = 30;
};

const gui = new dat.GUI();
gui.add(controls, 'rotationSpeed', 0, 0.5);
gui.add(controls, 'bouncingSpeed', 0, 0.5);
gui.add(controls, 'cameraPositionX', -100, 100);
gui.add(controls, 'cameraPositionY', -100, 100);
gui.add(controls, 'cameraPositionZ', -100, 100);

renderScene();

function renderScene() {
  requestAnimationFrame(renderScene);

  stats.update();

  cube.rotation.x += controls.rotationSpeed;
  cube.rotation.y += controls.rotationSpeed;
  cube.rotation.z += controls.rotationSpeed;

  step += controls.bouncingSpeed;
  sphere.position.x = 20 + ( 10 * (Math.cos(step)));
  sphere.position.y = 2 + ( 10 * Math.abs(Math.sin(step)));

  camera.position.x = controls.cameraPositionX;
  camera.position.y = controls.cameraPositionY;
  camera.position.z = controls.cameraPositionZ;

  renderer.render(scene, camera);
}
