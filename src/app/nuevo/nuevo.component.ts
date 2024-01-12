import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',//<-- Aqui esta tu etiqueta.
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
})
export class NuevoComponent{
  @Input() image: string ="";//parametro de imagen que recibe una ruta
  @Input() name: string="";//parametro de descripción recibe un texto
  @Input() description: string="";//parametro de descripción recibe un texto
  constructor() { }
}