export class Celular {
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarCelular(): void {
        console.log('CELULAR', this.marca);
        console.log('modelo', this.modelo);
    }
}
