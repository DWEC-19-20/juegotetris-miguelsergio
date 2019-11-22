    const cvs = document.getElementById("tetris");
    const ctx = cvs.getContext("2d");
    const FILAS = 20;
    const COLUMNAS = 10;
    const VACIO = "white";
    const SQ = SQUARESIZE = 20;

class Tablero {
        
        constructor(FILAS, COLUMNAS, SQ, ctx) {
        // inicializa el tablero todos los elementos de color WHITE		
        this.FILAS = FILAS;
        this.COLUMNAS = COLUMNAS;
        this.SQ = SQ;
        this.ctx = ctx;

        
        

        
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
        if(getCasilla(x, y, color)=="white"){
            return true;
        }else{
            return false;
        }

    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {
        let tabla=[];

        for (i=0;i<FILAS;i++){
            tabla[i] = [];
            for(j=0;j<COLUMNAS;j++){
                tabla[i][j]=VACIO;
            }
        }

        for (i=0;i<FILAS;i++){
            for(j=0;j<COLUMNAS;j++){
                setCasilla(j,i,tabla[i][j]);
            }
        }
    };

    get filas() {}

    set filas(fila) {}

    get columnas() {}

    set columnas(columna) {}

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return ctx.getImageData(c*SQ, f*SQ, SQ, SQ);
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        ctx.fillStyle = color;
        ctx.fillRect(x * SQ, y * SQ, SQ, SQ);
        ctx.strokeStyle = "BLACK";
        ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {
        let cont = 0;
            for (let i = FILAS-1; i >= 0; i--){
                for(let j = COLUMNAS-1; j >= 0; j--){
                    if(getColor(i, j)!="white"){
                        cont++;
                    }
                    if (cont==10){
                        borrarLinea(i);
                    }
                }
                cont=0;
            }
    }

    borrarLinea = (fila) => {
        for(let i = fila; i >= 0; i--){
            for(let j = 0; j <= 0; j++){
                setCasilla(i, j, getCasilla(i-1, j));
            }
        }
        score+=50;
    }

}