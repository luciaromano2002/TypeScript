import {Persona} from './Persona';
import {Direccion} from './Dirección';
import {Telefono} from './Teléfono';
import { Mail } from './Mail';

const DireccionLucia = new Direccion ("C/ Valencia", 2, 3, "L", 46469, "Cullera", "Valencia");
const DireccionLaura = new Direccion ("C/ Valencia", 4, 4, "S", 46460, "Massanassa", "Valencia");
const DireccionAndrea = new Direccion ("C/ Valencia", 10, 6, "K", 46461, "Alfafar", "Valencia");

const TelefonoLucia = new Telefono ("movil", 656555666);
const TelefonoLaura = new Telefono ("movil", 666666666);
const TelefonoAndrea = new Telefono ("movil", 655555555);

const MailLucia = new Mail ("gmail", "luciaromani@gmail.com");
const MailLaura = new Mail ("gmail", "lauramartinez@gmail.com");
const MailAndrea = new Mail ("gmail","andreagarcia@gmail.com");

let persona: Persona[] = []; 

let persona1 = new Persona ("Lucia", "Romaní", 24, "12345678A", new Date (12-1-1999), "Azul", "Femenino", DireccionLucia, TelefonoLucia, MailLucia, "");
let persona2 = new Persona ("Laura", "Martinez", 23, "12345678B", new Date (11-1-2000), "Verde", "Femenino", DireccionLaura, TelefonoLaura, MailLaura, "");
let persona3 = new Persona ("Andrea", "Garcia", 18, "12345678C", new Date (4-2-2005), "Rosa", "Femenino", DireccionAndrea, TelefonoAndrea, MailAndrea, "");

persona.push(persona1);
persona.push(persona2);
persona.push(persona3);

persona.forEach ((persona) => {
    persona.imprimirDatosPersonales();
});

let persona1Encontrada = persona.find((persona) => persona.getDNI() === "12345678A");

if (persona1Encontrada) {
    persona1Encontrada.setDireccion(DireccionLucia);
    persona1Encontrada.setTelefono(TelefonoLucia);
    persona1Encontrada.setEmail(MailLucia);
}

console.log(persona1.imprimirDatosPersonales());

let persona2Encontrada = persona.find ((persona) => persona.getDNI() === "12345678B");

if (persona2Encontrada) {
    persona2Encontrada.setDireccion(DireccionLaura);
    persona2Encontrada.setTelefono(TelefonoLaura);
    persona2Encontrada.setEmail(MailLaura);
}

console.log(persona2.imprimirDatosPersonales());

let persona3Encontrada = persona.find ((persona) => persona.getDNI() === "12345678C");

if(persona3Encontrada) {
    persona3Encontrada.setDireccion(DireccionAndrea);
    persona3Encontrada.setTelefono(TelefonoAndrea);
    persona3Encontrada.setEmail(MailAndrea);
}

console.log(persona3.imprimirDatosPersonales());

