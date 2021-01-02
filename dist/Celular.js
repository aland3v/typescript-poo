"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
class Celular {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    mostrarCelular() {
        console.log('CELULAR', this.marca);
        console.log('modelo', this.modelo);
    }
}
exports.Celular = Celular;
