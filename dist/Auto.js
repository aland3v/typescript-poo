"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
class Auto {
    constructor(color, anio) {
        this._color = color;
        this._marca = '';
        this._chuto = false;
        if (anio) {
            this._anio = anio;
        }
        else {
            this._anio = 1999;
        }
    }
    get chuto() {
        return this._chuto;
    }
    set chuto(value) {
        this._chuto = value;
    }
    get anio() {
        return this._anio;
    }
    set anio(value) {
        this._anio = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get marca() {
        return this._marca;
    }
    set marca(value) {
        this._marca = value;
    }
    mostrarAuto() {
        console.log('color', this.color);
        console.log('Año', this.anio);
        console.log('marca', this.marca);
        console.log('chuto', this.chuto);
    }
}
exports.Auto = Auto;
