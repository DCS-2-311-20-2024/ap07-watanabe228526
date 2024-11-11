//
// 応用プログラミング 第7回 課題1 (ap0701.js)
// G38400-2023 拓殖太郎
//
"use strict"; // 厳格モード

// ライブラリをモジュールとして読み込む
import * as THREE from "three";
import {GLTFLoader} from "three/addons";
import {OrbitControls} from "three/addons";
import GUI from "ili-gui";

// ３Ｄページ作成関数の定義
function init() {
  // 制御変数の定義
  const param = {
    axes: true, // 座標軸
  };

  // GUIコントローラの設定
  const gui = new GUI();
  gui.add(param, "axes").name("座標軸");

  // シーン作成
  const scene = new THREE.Scene();

  // 座標軸の設定
  const axes = new THREE.AxesHelper(18);
  scene.add(axes);

  // カメラの作成
  const camera = new THREE.PerspectiveCamera(
    50, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(6,2,2);
  camera.lookAt(0,0,0);

  // レンダラの設定
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, innerHeight);
  renderer.setClearColor(0x102040)
  document.getElementById("output").appendChild(renderer.domElement);

  // カメラの制御
  const orbitControls = new OrbitControls(camera, renderer.domElement);
  orbitControls.enableDumping = true;
  
  // モデルの読み込み
  let xwing; // モデルを格納する変数
  function loadModel() { // モデル読み込み関数の定義
    render(); // 描画開始
  }
  loadModel(); // モデル読み込み実行

  // 背景の設定
  let renderTarget;
  function setBackground() {

  }

  // 光源の設定
  // 環境ライト
  {
    const light = new THREE.AmbientLight();
    light.intensity=0.8;
    scene.add(light);
  }
  // スポットライト
  { 
    const light = new THREE.PointLight(0xffffff, 3000);
    light.position.set(0, 40, 0); 
    light.lookAt(0,0,0);
    scene.add(light);
  }

  // 構造物の作成
  const buildings = new THREE.Group();
  {
    const w = 10;
    const h = 20;
    const d = 10;
    const gap = 10;
    const n = 6;

  }
  scene.add(buildings);

  // 平面の作成
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshLambertMaterial({ color: 0x404040 }));
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -5;
  scene.add(plane);
 
  // 自動操縦コースの設定
  // 制御点
  const controlPoints = [
    [0, 0, 0],
    [0, 5, 40],
    [40, 5, 40],
    [40, 10, -20],
    [-40, 10, -20],
    [-40, 0, 20],
    [40, -3, 20],
    [40, -3, -40],
    [0, 0, -40],
  ]
  // コースの補間

  // コースの描画

  // Windowサイズの変更処理
  window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }, false);

  // 描画処理
  // 描画のための変数
  const clock = new THREE.Clock();
  // 描画関数
  function render() {
    // xwing の位置と向きの設定

    // 背景の切り替え
 
    // カメラの位置の切り替え
 
    // コース表示の有無
    
    // 座標表示の有無
    axes.visible = param.axes;

    // 描画
    renderer.render(scene, camera);
    // 次のフレームでの描画要請
    requestAnimationFrame(render);
  }
}

init();