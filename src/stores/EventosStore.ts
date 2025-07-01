import {writable, get} from 'svelte/store';

import { EventoModel } from '../models/EventoModel';

import { seleccionarPersonaje } from './PersonajesStore';

export const eventoSeleccionado = writable<EventoModel | undefined>(undefined);

export const eventosStore = writable<EventoModel[]>([
  new EventoModel(1, 
    "1843", 
    "Primer algoritmo: Ada Lovelace", 
    "Escribió el primer algoritmo informático de la Historia. Ella misma fue capaz de introducirlo, por primera vez, en una máquina. Con esto pudo explicar los primeros conceptos informáticos que, todavía hoy, persisten en la actualidad. Hablamos de Augusta Ada King, más conocida como Ada Lovelace. Pionera en el mundo de la informática y uno de los nombres científicos más importantes del siglo XIX.", 
    "https://impulso06.com/wp-content/uploads/2024/01/motor-analitico.png", 
    [1]),
  new EventoModel(2, 
    "1936", 
    "La máquina de Turing", 
    "Alan Turing publica su concepto de una máquina teórica capaz de ejecutar cualquier algoritmo computable.", 
    "https://proyectoidis.org/wp-content/uploads/1936/08/Front-of-a-bombe-code-breaking-machine-at-Bletchley-Park.jpg", 
    [2])
]);

export const seleccionarEvento = (idEvento: number): void => {
  const eventos = get(eventosStore);
  const evento = eventos.find(evento => evento.IdEvento === idEvento);
  if (evento) {
    seleccionarPersonaje(evento.IdPersonajes);
    eventoSeleccionado.set(evento);
  }
};