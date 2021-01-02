export class Auto {

    private _color: string;
    private _anio: number;
    private _marca: string;
    private _chuto: boolean;

    constructor(color:string, anio?: number) {
        this._color = color;
        this._marca = '';
        this._chuto = false;
        if (anio) {
            this._anio = anio;
        } else {
            this._anio = 1999;
        }
    }

    public get chuto(): boolean {
        return this._chuto;
    }
    public set chuto(value: boolean) {
        this._chuto = value;
    }

    public get anio(): number {
        return this._anio;
    }
    public set anio(value: number) {
        this._anio = value;
    }

    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    public get marca(): string {
        return this._marca;
    }

    public set marca(value: string) {
        this._marca = value;
    }

    mostrarAuto() {
        console.log('color', this.color);
        console.log('Año', this.anio);
        console.log('marca', this.marca);
        console.log('chuto', this.chuto);
    }
}