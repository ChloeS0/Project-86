var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_height=30;
block_width=30;
block_images_object="";
player_images_object="";
    
function player()
{
    fabric.Image.Url("player.png", function(Img){
    player_images_object=Img;
    player_images_object.scaleToWidth(150);
    player_images_object.scaleToHeight(140);
    player_images_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_images_object);
    } );
}

function block(getimage)
{
    fabric.Image.Url(getimage, function(Img){
    block_images_object=Img;
    block_images_object.scaleToWidth(block_width);
    block_images_object.scaleToHeight(block_height);
    block_images_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_images_object);
    } );
}