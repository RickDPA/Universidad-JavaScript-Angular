import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  titulo: string = 'Listado de Personas';

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyAgtV-T8NhrcrJsSSpEWLBw0748JxlEgrk',
      authDomain: 'https://listado-personas-61342-default-rtdb.firebaseio.com',
    });
  }

  /*
  var admin = require("firebase-admin");
  var serviceAccount = require("path/to/serviceAccountKey.json");
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://listado-personas-61342-default-rtdb.firebaseio.com"
  });
  */

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
  }


  
}
