class Direccion {
    private Calle: string;
    private Numero: number;
    private Piso: number;
    private Letra: string;
    private CodigoPostal: number;
    private Poblacion: string;
    private Provincia: string;

    constructor (c: string, n: number, p: number, l: string, CP: number, po: string, pr: string){
        this.Calle = c;
        this.Numero = n;
        this.Piso = p;
        this.Letra = l;
        this.CodigoPostal = CP;
        this.Poblacion = po;
        this.Provincia = pr;

    }
    getCalle(): string {
        return this.Calle;
    }

    getNumero(): number {
        return this.Numero;
    }

    getPiso(): number {
        return this.Piso;
    }

    getLetra(): string {
        return this.Letra;
    }

    getCodigoPostal(): number {
        return this.CodigoPostal;
    }

    getPoblacion(): string {
        return this.Poblacion;
    }

    getProvincia(): string {
        return this.Provincia;
    }

    setCalle (calle: string): void {
        this.Calle = calle;
    }

    setNumero (numero: number): void {
        this.Numero = numero;
    }

    setPiso (piso: number): void {
        this.Piso = piso;
    }

    setLetra (letra: string): void {
        this.Letra = letra;
    }

    setCodigoPostal (codigopostal: number): void {
        this.CodigoPostal = codigopostal;
    }

    setPoblacion (poblacion: string): void {
        this.Poblacion = poblacion;
    }

    setProvincia (provincia: string): void {
        this.Provincia = provincia;
    }

    getDireccionCompleta(): string {
        return `${this.getCalle()} ${this.getNumero()}${this.getPiso()}${this.getLetra()}, ${this.getCodigoPostal()} ${this.getPoblacion()}, ${this.getProvincia()}`;
      }

}

export {Direccion}; 