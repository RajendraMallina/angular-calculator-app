import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiCalComponent } from './bmi-cal/bmi-cal.component';
import { MathCalculatorComponent } from './math-calculator/math-calculator.component';
import { TempConvComponent } from './temp-conv/temp-conv.component';

const routes: Routes = [
  { path: 'math-calculator', component: MathCalculatorComponent },
  { path: 'temp-conv', component: TempConvComponent},
  { path: 'bmi-cal', component: BmiCalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
