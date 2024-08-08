/* La función setup se inicializa una sola vez, esta sirve para inicializar variables, funciona
similar como el void.setup de arduiono cuando inicia a correr el código, no es obligatoria declararse 
pero es una practica común hacerlo*/
function setup()
{
    createCanvas(400, 400); // Crea un lienzo
    describe('Crea un circulo dentro de un lienzo color agua, y se movera el circulo con el mouse')
}

/* La función draw es utilizada para que se ejecunte indefinidamente, similar como el void.loop()
en arduino. Esta función de draw se ejecuta repetidamente, se utiliza para animaciones y responder
a las entradas del usuario. para detener la función draw(), llamamos la función noloop(), y para 
reanudarla llamamos la función loop().draw() */

function draw() //Permite dibujar formas y figuras dentro del lienzo
{
    background(200); //agrega color al lienzo
    background("aqua"); //otra forma de agregar color al lienzo
    circle(200, 200, 100); //crea un circulo dentro del lienzo estático con una anchura y altura
    circle(mouseX, mouseY, 40) //Crea un circulo con un tamaño de 40px que se movera con el mouse
}

function doubleclicked()
{
    fill('deepink');
}