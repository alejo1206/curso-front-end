class Entidad {
    constructor(id) {
        this._idEntidad = id;
    }
    get idEntidad() {
        return this._idEntidad;
    }
    set idEntidad(idEntidad) {
        this._idEntidad = idEntidad;
    }
}

class Animal extends Entidad {
    constructor(id) {
        super(id);
        this._patas;
        this._tieneAlas;
    }
    get patas() {
        return this._patas;
    }
    set patas(patas) {
        this._patas = patas;
    }
    get tieneAlas() {
        return this._tieneAlas;
    }
    set tieneAlas(alas) {
        this._tieneAlas = alas;
    }

    ruido(){
        console.log("...");
    };
}

class Perro extends Animal {
    constructor(id) {
        super(id);
        this._patas = 4;
        this._tieneAlas = false;
    }

    ruido(){
        console.log("Ladra");
    }
}

class Paloma extends Animal {
    constructor(id) {
        super(id);
        this._patas = 2;
        this._tieneAlas = true;
    }
    ruido(){
        console.log("Silba");
    }
}

class Zoologico extends Entidad {
    constructor(id){
        super(id);
        this._animales = [];
    }
    get animales(){
        return _animales;
    }
    set animales(animales){
        this._animales = animales;
    }
    agregarAnimal(animal){
        this._animales.push(animal);
    }
}