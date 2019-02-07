let canvas = document.getElementById('renderCanvas');

const createMainScene = () => {
  //*************************BASIC SETUP - scene, camera, light
    //create new engine
    let engine = new BABYLON.Engine(canvas, true, { stencil: true });
        engine.loadingUIText = "LOADING";

    //create new empty scene
    let scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color4(0,0,0,0);


    //create camera
    let camera = new BABYLON.ArcRotateCamera("perspectiveCamera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);
        camera.setPosition(new BABYLON.Vector3(-30,120,0))

    //create ambient light
    let light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1 ,0), scene);
        light.groundColor = new BABYLON.Color3(0.5,0.5,0.5);

        //import gltf model
        BABYLON.SceneLoader.ImportMesh("", "./", "model.gltf", scene, function(newMesh){});


          engine.runRenderLoop(function () {
            scene.render();
          });
              //add event listener for correct resizing
          window.addEventListener('resize', function(){
              engine.resize();
          });
      
}

createMainScene();
