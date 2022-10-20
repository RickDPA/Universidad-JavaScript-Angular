import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService{
    
    personas:Persona[] = [
        new Persona("Juan", "Perez"), 
        new Persona("Laura", "Juarez"),
        new Persona("Karla", "Lara")
    ];
    
    saludar = new EventEmitter<number>();

    constructor(private loggingServide:LoggingService){}
    

    agregarPersona(persona:Persona){ 
        this.loggingServide.enviarMensajeAConsola("Agregamos persona: " + persona.nombre);
        this.personas.push(persona);
    }
    
}