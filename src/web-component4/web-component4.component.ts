import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import '@shoelace-style/shoelace/dist/components/button/button.js'

@Component({
  selector: 'app-web4',
  template: `<sl-button [variant]="'primary'">Button4</sl-button>`,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlertComponent4 implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}