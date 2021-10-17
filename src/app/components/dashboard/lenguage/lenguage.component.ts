import { Language } from './../../../module/language/language';
import { AppComponent } from './../../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lenguage',
  templateUrl: './lenguage.component.html',
  styleUrls: ['./lenguage.component.css']
})
export class LenguageComponent implements OnInit {
  numeroLanguage: string;
  name: string;
  extension: string;
  datos: any;
  constructor() {
    this.numeroLanguage = '',
    this.name = '',
    this.extension = '',
    this.datos = []
  }
  ngOnInit(): void {
  }
  log() {
    const datosLanguage = {
      numeroLanguage: this.numeroLanguage,
      name: this.name,
      extension: this.extension
    };
    this.datos.push(datosLanguage);
    console.log(this.datos);
  }
  eliminar(id){
    this.datos.splice(id,1);
  }


}
