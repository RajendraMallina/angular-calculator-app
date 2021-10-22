import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MathCalculatorComponent } from './math-calculator/math-calculator.component';
import { TempConvComponent } from './temp-conv/temp-conv.component';
import { BmiCalComponent } from './bmi-cal/bmi-cal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MathCalculatorComponent,
    TempConvComponent,
    BmiCalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
