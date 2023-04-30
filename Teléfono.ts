class Telefono {
    private Tipo: string;
    private Numero: number;

    constructor (t: string, n: number) {
        this.Tipo = t;
        this.Numero = n;
    }

    getTipo(): string {
        return this.Tipo
    }

    getNumero(): number {
        return this.Numero
    }

    setTipo (tipo: string): void {
        this.Tipo = tipo;
    }

    setNumero (numero: number): void {
        this.Numero = numero;
    }

}

export {Telefono};