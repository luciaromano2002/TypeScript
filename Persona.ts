import {Direccion} from "./Dirección";
import {Telefono} from "./Teléfono";
import { Mail } from "./Mail";

class Persona {
  private Nombre: string;
  private Apellidos: string;
  private Edad: number;
  private DNI: string;
  private Cumpleaños: Date
  private ColorFavorito: string;
  private Sexo: string;
  private Direccion: Direccion; 
  private Telefono: Telefono;
  private Email: Mail;
  private Notas: string;

  constructor(n: string, a: string, ed: number, DNI: string, c: Date, cF: string, s: string, d: Direccion, t: Telefono, e: Mail, no: string) {
    this.Nombre = n;
    this.Apellidos = a;
    this.Edad = ed;
    this.DNI = DNI;
    this.Cumpleaños = c;
    this.ColorFavorito = cF;
    this.Sexo = s;
    this.Direccion = d;
    this.Telefono = t;
    this.Email = e;
    this.Notas = no;
  }

   getNombre(): string {
    return this.Nombre;
  }

  getApellidos(): string {
    return this.Apellidos;
  }

  getEdad(): number {
    return this.Edad;
  }

  getDNI(): string {
    return this.DNI;
  }

  getCumpleaños(): Date {
    return this.Cumpleaños;
  }

  getColorFavorito(): string {
    return this.ColorFavorito;
  }

  getSexo(): string {
    return this.Sexo;
  }

  getDireccion (): Direccion {
    return this.Direccion;
  }

  getTelefono(): Telefono {
    return this.Telefono;
  }

  getEmail(): Mail {
    return this.Email;
  }

  getNotas(): string {
    return this.Notas;
  }

  setNombre (nombre: string): void {
    this.Nombre = nombre;
  }

  setApellidos (apellidos: string): void {
    this.Apellidos = apellidos;
  }

  setEdad (edad: number): void {
    this.Edad = edad;
  }

  setDNI (dni: string): void {
    this.DNI = dni;
  }

  setCumpleaños (cumpleaños: Date): void {
    this.Cumpleaños = cumpleaños;
  }

  setColorFavorito (colorfavorito: string): void {
    this.ColorFavorito = colorfavorito;
  }

  setSexo (sexo: string): void {
    this.Sexo = sexo;
  }

  setDireccion (direccion: Direccion): void {
    this.Direccion = direccion;
  }

  setTelefono(telefono: Telefono): void {
    this.Telefono = telefono;
  }

  setEmail(email: Mail): void {
    this.Email = email;
  }

  setNotas (notas: string): void {
    this.Notas = notas;
  }

  imprimirDatosPersonales() {
    console.log(
      `Nombre: ${this.Nombre} ${this.Apellidos}\n` +
      `Edad: ${this.Edad}\n` +
      `DNI: ${this.DNI}\n` +
      `Fecha de nacimiento: ${this.Cumpleaños}\n` +
      `Color favorito: ${this.ColorFavorito}\n` +
      `Género: ${this.Sexo}\n` +
      `Dirección: ${this.Direccion.getDireccionCompleta()}\n` +
      `Teléfono: ${this.Telefono.getNumero()}\n` +
      `Email: ${this.Email.getDireccion()}\n` +
      `Notas: ${this.Notas}\n`
    );
  }

}

export {Persona};


