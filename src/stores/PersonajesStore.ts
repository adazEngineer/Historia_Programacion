import { get, writable } from 'svelte/store';
import { PersonajeModel } from '../models/PersonajeModel';

export const personajeSeleccionado = writable<PersonajeModel[]>([]);

export const personajesStore = writable<PersonajeModel[]>([
  new PersonajeModel(1, 
    "1815-12-10", 
    "1852-11-27", 
    "Ada Lovelace", 
    "Reino Unido", 
    "Considerada la primera programadora de la historia, escribió el primer algoritmo destinado a ser procesado por una máquina.", 
    "https://mujeres360.org/wp-content/uploads/2022/01/image-12.png"),
  new PersonajeModel(2, 
    "1906-06-23", 
    "1992-06-07", 
    "Alan Turing", 
    "Reino Unido", 
    "Padre de la computación moderna, propuso la máquina de Turing y ayudó a descifrar los códigos Enigma durante la Segunda Guerra Mundial.", 
    "https://myhero.com/content/images/thumbs/0123665_alan-turing.jpeg")
]);

export const seleccionarPersonaje = (IdPersonajes: number[]): void => {
  const personaje: PersonajeModel[] = get(personajesStore);
  personajeSeleccionado.set(personaje.filter(personaje => IdPersonajes.includes(personaje.IdPersonaje)));
};