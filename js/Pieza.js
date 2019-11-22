// las piezas y sus colores
const PIEZAS = [
    [Z, "orange"],
    [S, "cyan"],
    [T, "green"],
    [O, "grey"],
    [L, "purple"],
    [I, "red"],
    [J, "yellow"]
];

// La clase pieza
class Pieza {

    constructor(tetromino, color, tablero) {
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas
        this.tetromino=tetromino;
        this.color=color;
        this.tablero=tablero;


    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {

        posicion+=1;
        
        if(posicion>=4){
            posicion = 0;

        }
        borrar();
        rellenar();
    }


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {}

    // dibuja el color de una pieza
    dibujar = () => {}

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {

        for(let i=0; i<pieza[0].length; i++){
            for(let j=0; i<pieza[0][i].length;j++){
                if(pieza[0][i][j]==1){
                    setCasilla(j+3, i, "white");
                }
            }
        }



    }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {}

        borrar();
        rellenar()+y;


    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {

        borrar();
        rellenar()+x;
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        borrar();
        rellenar()-x;
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {}

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {}

    


}