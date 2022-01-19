import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { Router } from '@angular/router';


@Component({
    selector: 'step5',
    templateUrl: './step5.component.html',
    styleUrls: [ './step5.component.css' ]
  })
  export class Step5 implements OnInit {
    constructor(private router: Router) { }
 
    ngOnInit() {
      setTimeout(()=>{                  
        
        this.router.navigate(['/step6']);
   }, 3000);
    } 

  }