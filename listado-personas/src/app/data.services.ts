
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices{
    constructor(private httpClient:HttpClient){}

    cargarPersonas(){
        return this.httpClient.get("https://listado-personas-61342-default-rtdb.firebaseio.com/datos.json");
    }

    //
    guardarPersonas(personas: Persona[]){
        this.httpClient.put("https://listado-personas-61342-default-rtdb.firebaseio.com/datos.json", personas)
        .subscribe(
            response => 
                console.log("resultado de guardar las personas: ", response),
            error => console.log("rror al guardar Personas: " + error)
        );
    }

    modificarPersona(index:number, persona:Persona){

        let url:string;
        url = "https://listado-personas-61342-default-rtdb.firebaseio.com/datos/" + index + ".json";
        this.httpClient.put(url, persona)
        .subscribe(
            response => console.log("resultado modifiacar Persona: " + response),
            error => console.log("Error en modificar Persona: " + error)
        )

    }

    eliminarPersona(index: number){
        let url:string;
        url = "https://listado-personas-61342-default-rtdb.firebaseio.com/datos/" + index + ".json";
        this.httpClient.delete(url)
        .subscribe(
            response => console.log("resultado eliminar Persona: " + response),
            error => console.log("Error en eliminar Persona: " + error)
        )
    }
}