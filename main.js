var canvas = new fabric.Canvas("myCanvas");

playerx=20;
playery=20;

blockwidth=30;
blockheight=30;

player_object="";
player_block="";

function player_create() {
    fabric.Image.fromURL("player.png" , function(Img){
        player_object= Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playery,
            left:playerx
        })

        canvas.add(player_object);
    });

}


function block_create(getImage) {
    fabric.Image.fromURL(getImage , function(Img){
        player_block= Img;

        player_block.scaleToWidth(blockwidth);
        player_block.scaleToHeight(blockheight);
        player_block.set({
            top:playery,
            left:playerx
        })

        canvas.add(player_block);
    });

}

function add() {
    player_create()
    block_create('');
    document.getElementById("idk").style.display="none";
}

window.addEventListener("keydown",keydown)
function keydown(e) {
    var keyCode = e.keyCode
    console.log(keyCode);

    if (e.shiftKey==true && keyCode==80) {
        console.log("add block size by 10");
        blockheight=blockheight+10;
        blockwidth=blockwidth+10;
        document.getElementById("cwidth").innerHTML=blockwidth;
        document.getElementById("cheight").innerHTML=blockheight;
    }

    if (e.shiftKey==true && keyCode==77) {
        if(blockheight>=20){
        console.log("reduce block size by 10");
        blockheight=blockheight-10;
        blockwidth=blockwidth-10;
        document.getElementById("cwidth").innerHTML=blockwidth;
        document.getElementById("cheight").innerHTML=blockheight;
        }
    }

    // Blocks
    if (keyCode==71) {
        block_create('ground.png')
        console.log("g (Dirt Block)")
    }

    if (keyCode==67) {
        block_create('cloud.png')
        console.log("c (Cloud Block)")
    }

    if (keyCode==84) {
        block_create('trunk.png')
        console.log("t (Wood Block)")
    }

    if (keyCode==85) {
        block_create('unique.png')
        console.log("u (Unique Block)")
    }

    if (keyCode==68) {
        block_create('dark_green.png')
        console.log("d (Grass Block)")
    }

    if (keyCode==76) {
        block_create('light_green.png')
        console.log("l (light grass Block)")
    }

    if (keyCode==82) {
        block_create('roof.png')
        console.log("r (Roof Block)")
    }

    if (keyCode==66) {
        block_create('wall.png')
        console.log("b (Brown Wall Block)")
    }

    if (keyCode==89) {
        block_create('yellow_wall.png')
        console.log("y (Yellow Wall Block)")
    }
   if(keyCode==38){
       up();
   }
   if(keyCode==40){
       down();
   }
   if(keyCode==37){
       left();
   }
   if(keyCode==39){
       right();
   }
}

function up(){
    if(playery>=0){
        canvas.remove(player_object);
        playery=playery-blockheight;
        player_create();
    }
}

function down(){
    if(playery<=460){
        canvas.remove(player_object);
        playery=playery+blockwidth;
        player_create();
    }
}

function left(){
    if(playerx>=0){
        canvas.remove(player_object);
        playerx=playerx-blockheight;
        player_create();
    }
}

function right(){
    if(playerx<=850){
        canvas.remove(player_object);
        playerx=playerx+blockheight;
        player_create();
    }
}