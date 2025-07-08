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
    [2]),
    new EventoModel(3,
  "1945", 
  "Informe de Von Neumann", 
  "Durante esta década, la programación se realizaba directamente en lenguaje máquina o utilizando códigos simbólicos muy cercanos al hardware. En 1949 surgió Assembly, un lenguaje de bajo nivel que permitió representar las instrucciones mediante nombres mnemotécnicos más fáciles de recordar. Uno de los pioneros en esta etapa fue John von Neumann, quien propuso la arquitectura que lleva su nombre y que todavía se utiliza en las computadoras actuales. La arquitectura de von Neumann es el modelo base de las computadoras modernas y plantea que una computadora debe contar con una memoria para almacenar datos y programas, una unidad de control que gestione la ejecución de las instrucciones, y una unidad aritmético-lógica (ALU) encargada de realizar operaciones matemáticas y lógicas.",
  "https://odiseageek.es/assets/2020/09/1280px-Eniac.jpg", 
  [3]),
  new EventoModel(4,
  "1949", 
  "Compilador de lenguaje simbólico", 
  "Desarrolló uno de los primeros lenguajes simbólicos (ensambladores) y un compilador primitivo para la computadora ARC (Automatic Relay Calculator). Su trabajo permitió traducir instrucciones simbólicas a código máquina automáticamente, facilitando la programación y sentando las bases para los futuros compiladores. Esto fue un avance importante para la computación, porque antes se programaba directamente en lenguaje máquina, mucho más difícil y propenso a errores",
  "https://culturacientifica.com/app/uploads/2023/06/booth-1.jpg", 
  [4]),
  new EventoModel(
  5,
  "1951", 
  "Primer programa en ensamblador", 
  "Junto con su equipo en la Universidad de Cambridge, desarrolló el primer programa en ensamblador, conocido como 'Initial Orders', para la computadora EDSAC. Este programa permitía traducir instrucciones simbólicas a lenguaje máquina, facilitando la escritura y ejecución de programas. Fue uno de los primeros pasos hacia los compiladores modernos y marcó un hito en la historia de la programación.",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0f3NT1OSGjIbF5RNnOTWfIH2H3e7fEq4T0A&s", 
  [5]),
  new EventoModel(
  6,
  "1957", 
  "Nacimiento de FORTRAN", 
  "En 1957, nació FORTRAN (FORmula TRANslator), el primer lenguaje de programación de alto nivel de uso comercial, desarrollado por un equipo de IBM liderado por John Backus. Su objetivo era facilitar la programación científica y matemática, permitiendo escribir instrucciones más cercanas al lenguaje humano que al código máquina. FORTRAN revolucionó la programación al introducir compiladores eficientes y sentó las bases para los lenguajes modernos.",
  "https://microchipotle.com/wp-content/uploads/2024/07/Fortran-un-lenguaje-que-revoluciono-la-programacion-IBM-704.png", 
  [6]),
  new EventoModel(
  7,
  "1958", 
  "Creacion de LISP", 
  "Creó LISP (LISt Processor), un lenguaje de programación diseñado para la inteligencia artificial. Fue revolucionario por su uso de listas como estructura de datos principal y por introducir conceptos como la recursión y el procesamiento simbólico. LISP se convirtió en uno de los lenguajes más influyentes en la investigación en IA y aún se utiliza en algunas aplicaciones avanzadas.",
  "https://iccsi.com.ar/wp-content/uploads/como-contribuyo-john-mccarthy-al-desarrollo-de-la-ia-1.webp", 
  [7]),
  new EventoModel(
  8,
  "1959", 
  "COBOL: lenguaje empresarial", 
  "Se creó COBOL (COmmon Business-Oriented Language), un lenguaje de programación diseñado para aplicaciones empresariales y administrativas. Fue impulsado por un comité del Departamento de Defensa de EE. UU., con la destacada participación de Grace Hopper, pionera en la programación. COBOL se caracterizó por su sintaxis similar al inglés, lo que facilitó su adopción en bancos, gobiernos y empresas, donde aún se usa en sistemas heredados.",
  "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/12/09/grace-murray-hopper.jpeg", 
  [8]),
  new EventoModel(
  9,
  "1964", 
  "Lenguaje BASIC", 
  "Desarrollaron el lenguaje BASIC (Beginner's All-purpose Symbolic Instruction Code) con el objetivo de facilitar el aprendizaje de la programación. Fue diseñado para ser un lenguaje simple y accesible, especialmente para estudiantes sin formación técnica. BASIC permitió que más personas pudieran programar, marcando un paso importante en la democratización de la computación.",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFmKHQhJZ9orDaIjUoC45tJ5YpNMFGaZzaJJ3PsScVHG7OcRbgFt36jTZpOzUQv1H9BTnF2M1KA_loKEimUFjbLsnldGprUKhi72w_XFJi-T7QGv_T9yabo3PV0ZIi-qZwfy7HiZrDhFk/s1600/05-01+Efemerides+de+Tecnologia+BASIC.jpg", 
  [9]),
  new EventoModel(
  10,
  "1967", 
  "Simula 67: Origen de POO", 
  "Desarrollaron Simula 67, un lenguaje de programación creado en Noruega para simulaciones. Fue el primer lenguaje en incorporar conceptos de programación orientada a objetos (POO), como clases, objetos y herencia. Estos conceptos revolucionaron la forma de diseñar software y se convirtieron en la base de lenguajes modernos como C++, Java y Python.",
  "https://jofrapese.blogia.com/upload/20080627221700-dahl-nygaard.jpg", 
  [10]),
  new EventoModel(
  11,
  "1969", 
  "Nacimineto de UNIX y C", 
  "Desarrollaron el sistema operativo UNIX, diseñado para ser simple, portátil y multitarea. Poco después, Ritchie creó el lenguaje de programación C para reescribir UNIX, lo que permitió mayor flexibilidad y portabilidad del sistema. UNIX y C marcaron un antes y un después en la informática, influenciando directamente muchos sistemas y lenguajes modernos.",
  "https://i0.wp.com/architecnologia.es/wp-content/uploads/2019/09/dennis-ritchie-ken-thompson.jpg?fit=800%2C504", 
  [11]),new EventoModel(
  12,
  "1970", 
  "Algol-W y Pascal", 
  "desarrolló el lenguaje de programación Pascal, inspirado en Algol-W, una versión previa que él mismo ayudó a crear. Pascal fue diseñado para enseñar buenas prácticas de programación estructurada y se convirtió en un lenguaje muy popular en la educación y el desarrollo de software en los años 70 y 80. Su claridad y estructura influyeron en muchos lenguajes posteriores",
  "https://imagenes.montevideo.com.uy/imgnoticias/202401/_W933_80/867825.jpg", 
  [12]),
  new EventoModel(
  13,
  "1972", 
  "Lenguaje C", 
  "Desarrolló el lenguaje de programación C en los laboratorios Bell. Fue diseñado para escribir sistemas operativos, especialmente UNIX, y ofrecía un equilibrio entre eficiencia y control del hardware. C se convirtió en uno de los lenguajes más influyentes de la historia, sirviendo como base para muchos otros lenguajes modernos como C++, Java y Python.",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfp7hATdDCDeYHvfoftifg2HmInGLsV0srw&s", 
  [13]),
]);

export const seleccionarEvento = (idEvento: number): void => {
  const eventos = get(eventosStore);
  const evento = eventos.find(evento => evento.IdEvento === idEvento);
  if (evento) {
    seleccionarPersonaje(evento.IdPersonajes);
    eventoSeleccionado.set(evento);
  }
};