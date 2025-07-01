
export class PersonajeModel {
    IdPersonaje: number;
    FechaNacimiento: string;
    FechaMuerte: string;
    Nombre: string;
    Nacionalidad: string;
    Biografia: string;
    Foto: string;
    constructor(
        idPersonaje: number,
        fechaNacimiento: string,
        fechaMuerte: string,
        nombre: string,
        nacionalidad: string,
        biografia: string,
        foto: string) {
        this.IdPersonaje = idPersonaje;
        this.FechaNacimiento = fechaNacimiento;
        this.FechaMuerte = fechaMuerte;
        this.Nombre = nombre;
        this.Nacionalidad = nacionalidad;
        this.Biografia = biografia;
        this.Foto = foto;
    }
}