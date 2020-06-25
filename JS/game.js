let config ={
    type : Phaser.CANVAS,
    width:800,
    height:600,
    backgroundColor: 0xffcc00,
    scene:{
        preload:preload,
        create:create,
        update: update
    }
};

let game =new Phaser.Game(config);
 function preload(){
     console.log("Preload")
 }
 function create(){
    console.log("Create")
}
function update(){
    console.log("Update ")
}