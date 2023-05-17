// function yo1() {
//     // Get the canvas element
//     var canvas = document.getElementById("renderCanvas");

//     // Create the Babylon.js engine
//     var engine = new BABYLON.Engine(canvas, true);

//     // Create a scene
//     var scene = new BABYLON.Scene(engine);

//     // Create a camera
//     var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, BABYLON.Vector3.Zero(), scene);
//     camera.attachControl(canvas, true);

//     // Create a video texture
//     var videoTexture = new BABYLON.VideoTexture("videoTexture", "https://playground.babylonjs.com/textures/babylonjs.mp4", scene, true);

//     // Create a material and apply the video texture to it
//     var material = new BABYLON.StandardMaterial("videoMaterial", scene);
//     material.diffuseTexture = videoTexture;

//     // Create a plane mesh
//     var plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 10, height: 5 }, scene);
//     plane.material = material;

//     videoTexture.video.muted = true;
//     videoTexture.video.play();

//     // Start the engine main loop
//     engine.runRenderLoop(function () {
//         scene.render();
//     });
// }

// function yo2() {
//     videoTexture.video.play();
// }

function yo1()
{
    var canvas = document.getElementById("renderCanvas");

    // Create the Babylon.js engine
    var engine = new BABYLON.Engine(canvas, true);

    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.ArcRotateCamera("arcR", -Math.PI/2, Math.PI/2, 15, BABYLON.Vector3.Zero(), scene);

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

	var planeOpts = {
			height: 5.4762, 
			width: 7.3967, 
			sideOrientation: BABYLON.Mesh.DOUBLESIDE
	};

    var ANote0Video = BABYLON.MeshBuilder.CreatePlane("plane", planeOpts, scene);
	var vidPos = (new BABYLON.Vector3(0,0,0.1))
    ANote0Video.position = vidPos;
	var ANote0VideoMat = new BABYLON.StandardMaterial("m", scene);
	var ANote0VideoVidTex = new BABYLON.VideoTexture("vidtex","videos/mov_bbb.mp4", scene);
	ANote0VideoMat.diffuseTexture = ANote0VideoVidTex;
	ANote0VideoMat.roughness = 1;
	ANote0VideoMat.emissiveColor = new BABYLON.Color3.White();
	ANote0Video.material = ANote0VideoMat;
	scene.onPointerObservable.add(function(evt){
			if(evt.pickInfo.pickedMesh === ANote0Video){
                //console.log("picked");
					if(ANote0VideoVidTex.video.paused)
						ANote0VideoVidTex.video.play();
					else
						ANote0VideoVidTex.video.pause();
                    console.log(ANote0VideoVidTex.video.paused?"paused":"playing");
			}
	}, BABYLON.PointerEventTypes.POINTERPICK);

    engine.runRenderLoop(function () {
        scene.render();
    });
    //console.log(ANote0Video);
    // return scene;
}