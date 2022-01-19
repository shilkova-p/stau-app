import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'step1',
    templateUrl: './step1.component.html',
    styleUrls: [ './step1.component.css' ]
  })
  export class Step1  {
    
    menu: boolean | undefined;
    toggleMenu(){
    this.menu = !this.menu
    console.log(this.menu);
    }
  }