import { Component } from "@angular/core";


@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
    
})
export class PersonasComponent{
    deshabilitar = false;
    mensaje = "";
    titulo = "Licenciado";
    mostrar = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = "Persona agregada";
    }

    /* Event binding
    modificarTitulo(event:Event){
        console.log("Entrando al método modificar título");
        this.titulo= (<HTMLInputElement>event.target).value;
    }
    */
}