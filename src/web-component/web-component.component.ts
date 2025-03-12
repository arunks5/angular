import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import '@shoelace-style/shoelace/dist/components/button/button.js'

@Component({
  selector: 'app-web',
  templateUrl: './web-component.component.html',
  styleUrls: ['./web-component.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertComponent1 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}