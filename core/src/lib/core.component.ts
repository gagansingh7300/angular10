import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <p>
      core works Properly !!
    </p>
  `,
  styles: [
  ]
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
