class Mail {
    private Tipo: string;
    private Direccion: string;

    constructor (t: string, d: string) {
        this.Tipo = t;
        this.Direccion = d;
    }

    getTipo (): string {
        return this.Tipo
    }

    getDireccion (): string {
        return this.Direccion
    }

    setTipo (tipo: string): void {
        this.Tipo = tipo;
    }

    setDireccion (direccion: string): void {
        this.Direccion = direccion;
    }

}

export {Mail};