import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header.component';
import { Home } from './home/home.component';
import { Step1 } from './step1/step1.component';
import { Step2 } from './step2/step2.component';
import { Step3 } from './step3/step3.component';
import { Step4 } from './step4/step4.component';
import { Step5 } from './step5/step5.component';
import { Step6 } from './step6/step6.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Home },
  { path: 'step1', component: Step1 },
  { path: 'step2', component: Step2 },
  { path: 'step3', component: Step3 },
  { path: 'step4', component: Step4 },
  { path: 'step5', component: Step5 },
  { path: 'step6', component: Step6 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
