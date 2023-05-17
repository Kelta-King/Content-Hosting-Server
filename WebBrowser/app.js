window.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    var canvas = document.getElementById("renderCanvas");

    // Create the Babylon.js engine
    var engine = new BABYLON.Engine(canvas, true);

    // Create a scene
    var scene = new BABYLON.Scene(engine);

    // Create a camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Create a video texture
    var videoTexture = new BABYLON.VideoTexture("videoTexture", "http://localhost:3000/video", scene, true);

    // Create a material and apply the video texture to it
    var material = new BABYLON.StandardMaterial("videoMaterial", scene);
    material.diffuseTexture = videoTexture;

    // Create a cube
    var cube = BABYLON.MeshBuilder.CreateBox("cube", { size: 5 }, scene);
    cube.material = material;

    // Start the engine main loop
    engine.runRenderLoop(function () {
        scene.render();
    });
});
