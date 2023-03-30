// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas')

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var block_image_object= "";

// Termine de programar a função new_image() para adicionar uma nova imagem
function new_image(get_image)
{
	fabric.Image.fromURL('.png', function(Img) {
    console.log(Img);
    blockImageObject = Img;
    blockImageObject.scaleToWidth(block_image_width);
    blockImageObject.scaleToHeight(block_image_height);
    blockImageObject.set({
        top:block_y,
        ledt:block_x
	});
    canvas.add(blockImageObject);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	// Utilize keycode para adicionar a imagem do ranger vermelho (red)
	if(keyPressed =='82' ){
		block_x = 10;
		new_image('vermelho.jpg');
		console.log('R');
	}
	
	// Utilize keycode para adicionar a imagem do ranger verde (green)
	if(keyPressed =='71' )
	{
		block_x = 310;
		new_image('verde.png');
		console.log('G');


	}
	// Utilize keycode para adicionar a imagem da ranger amarela (yellow)
	if(keyPressed == '89')
	{
		block_x = 560;
		new_image('amarelo.png');
		console.log('Y');

		

	}
	// Utilize keycode para adicionar a imagem da ranger rosa (pink)
	if(keyPressed =='80' )
	{
	
		block_x = 880;
		new_image('rosa.png');
		console.log('P');

	}
	// Utilize keycode para adicionar a imagem do ranger azul (blue)
	if(keyPressed == '66')
	{
		block_x = 1040;
		new_image('azul.png');
		console.log('B');


	}
	
}

