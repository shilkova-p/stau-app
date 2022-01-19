import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Home } from './home/home.component';
import { Step1 } from './step1/step1.component';
import { Step2 } from './step2/step2.component';
import { Step3 } from './step3/step3.component';
import { Step4 } from './step4/step4.component';
import { Step5 } from './step5/step5.component';
import { Step6 } from './step6/step6.component';


@NgModule({
  declarations: [
    AppComponent,
    Header, 
    Home, 
    Step1,
    Step2,
    Step3,
    Step4,
    Step5,
    Step6,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
