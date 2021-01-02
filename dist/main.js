"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auto_1 = require("./Auto");
const Celular_1 = require("./Celular");
// Creación de autos
const auto = new Auto_1.Auto('Amarillo', 2005);
auto.chuto = true;
auto.marca = 'toyota';
auto.mostrarAuto();
const auto2 = new Auto_1.Auto('Verde', 2019);
auto2.mostrarAuto();
const auto3 = new Auto_1.Auto('Rojo');
auto3.mostrarAuto();
// Creación de objetos celular
const celular = new Celular_1.Celular('Xiami', 'mia2 lite');
celular.mostrarCelular();
