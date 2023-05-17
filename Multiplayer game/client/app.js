var createScene = function () {
    var colyseusSDK = new Colyseus.Client("ws://localhost:2567");
    colyseusSDK
        .joinOrCreate("my_room")
        .then(function (room) {
            console.log("Connected to roomId: " + room.roomId);
        })
        .catch(function (error) {
            console.log("Couldn't connect.");
        });

    var ground = BABYLON.MeshBuilder.CreatePlane("ground", { size: 500 }, scene);
    ground.position.y = -15;
    ground.rotation.x = Math.PI / 2;
};