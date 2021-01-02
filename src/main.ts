import { Auto } from './Auto'
import { Celular } from './Celular'

// Creación de autos
const auto = new Auto('Amarillo', 2005);
auto.chuto = true;
auto.marca = 'toyota';
auto.mostrarAuto();

const auto2 = new Auto('Verde', 2019);
auto2.mostrarAuto();

const auto3 = new Auto('Rojo');
auto3.mostrarAuto();

// Creación de objetos celular
const celular = new Celular('Xiami', 'mia2 lite');
celular.mostrarCelular();
