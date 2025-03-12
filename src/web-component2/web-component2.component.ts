import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import '@shoelace-style/shoelace/dist/components/button/button.js'

@Component({
  selector: 'app-web2',
  templateUrl: './web-component2.component.html',
  styleUrls: ['./web-component2.component.css'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertComponent2 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}