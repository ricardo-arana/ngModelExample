import { Component } from '@angular/core';
import { Persona } from './models/persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'registros';
  persona: Persona;
  esDev: boolean;
  esAnalista: boolean;
  esTeamLeader: boolean;
  estadoCivil: string;

  constructor() {
      this.persona = { nombre: '', apellido: ''};
  }

  enviarDatos(forma: any) {
    if(forma.valid) {
      console.log('Formulario valido');
    } else {
      console.log('Formulario invalido');
    }
    console.log(forma);
    
  }
}
