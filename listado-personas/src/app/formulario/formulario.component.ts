import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  
  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = "";
  apellidoInput:string = "";
  //@ViewChild("nombreInput") nombreInput:ElementRef ;
  //@ViewChild("apellidoInput") apellidoInput:ElementRef;

  constructor(private loggingService:LoggingService,
              private personasService:PersonasService){

    this.personasService.saludar.subscribe(
      (indice:number) => alert("El indice es: " + (indice + 1))
    );
  
    
  }

  ngOnInit(): void {
      
  }


  agregarPersona(){
    let persona1 = new Persona(

      this.nombreInput,  //.nativeElement.value 
      this.apellidoInput //.nativeElement.value
    );

    //this.loggingService.enviarMensajeAConsola("Enviamos persona:" + persona1.nombre + " apellido: " + persona1.apellido);
    //this.personaCreada.emit(persona1);

    this.personasService.agregarPersona(persona1);
  }
}
