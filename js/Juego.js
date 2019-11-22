class Juego {

    constructor(cvs) {
        this.ctx = cvs.getContext("2d");
        this._tablero = new Tablero(20, 10, 20, this.ctx);
        this._pieza = this.piezaAleatoria();
        this.gameOver = false;
        this._comenzarCaer = Date.now();
        this.score = 0;

    }

    // devuelve una pieza aleatoria
    piezaAleatoria = () => {
        var nuevaPieza = Math.random();
        var color;
        
        if(nuevaPieza<=0.143){
            nuevaPieza=Z;
        }else if(nuevaPieza>=0.143 && nuevaPieza<=0.286){
            nuevaPieza=I;
        }else if(nuevaPieza>=0.286 && nuevaPieza<=0.429){
            nuevaPieza=S;
        }else if(nuevaPieza>=0.429 && nuevaPieza<=0.572){
            nuevaPieza=T;
        }else if(nuevaPieza>=0.572 && nuevaPieza<=0.715){
            nuevaPieza=O;
        }else if(nuevaPieza>=0.715 && nuevaPieza<=0.858){
            nuevaPieza=L;
        }else{
            nuevaPieza=J;
        }

        for(let i = 0; i<=PIEZAS.length; i++){
            if(PIEZAS[i][0]==piezaNueva){
                color=PIEZAS[i][1];
            }
        }
        
        return new Pieza(nuevaPieza, color, this.tablero);
    }

    get tablero() {
        return this._tablero;
    }

    get pieza() {
        return this._pieza;
    }

    set pieza(pieza) {
        this._pieza = pieza;
    }

    get comenzarCaer() {
        return this._comenzarCaer;
    }
    set comenzarCaer(comenzarCaer) {
        this._comenzarCaer = comenzarCaer;
    }
    caer = () => {
        let ahora = Date.now();
        let delta = ahora - this.comenzarCaer;
        if (delta > 1000) {
            this.pieza.moverAbajo();
            this.comenzarCaer = Date.now();
        }
        if (!this.gameOver) {
            requestAnimationFrame(this.caer);
        }
    }

    control = (event) => {
        if (event.keyCode == 37) {
            this.pieza.moverIzquierda();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 38) {
            this.pieza.rotar();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 39) {
            this.pieza.moverDerecha();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 40) {
            this.pieza.moverAbajo();
        }
    }

}