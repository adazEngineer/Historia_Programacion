
export class EventoModel {
    IdEvento: number;
    Fecha: string;
    Titulo: string;
    Descripcion: string;
    Imagen: string;
    IdPersonajes: number[];

    constructor(
        idEvento: number,
        fecha: string,
        titulo: string,
        descripcion: string,
        imagen: string,
        idPersonajes: number[]) {
        this.IdEvento = idEvento;
        this.Fecha = fecha;
        this.Titulo = titulo;
        this.Descripcion = descripcion;
        this.Imagen = imagen;
        this.IdPersonajes = idPersonajes;
    }
}