import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { TimerComponent } from './timer/timer.component';
import { Comp1Component } from './timer/comp1/comp1.component';
import { Comp2Component } from './timer/comp2/comp2.component';
import { Comp3Component } from './timer/comp3/comp3.component';
import { Comp4Component } from './timer/comp4/comp4.component';
import { Route5Component } from './route5/route5.component';

const appRoutes: Routes = [
 { path: 'text', component: TextComponent },
 { path: 'ecommerce', component: EcommerceComponent},
 { path: 'timer', component: TimerComponent },
 { path: 'route5', component: Route5Component },
];

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    EcommerceComponent,
    TimerComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Route5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
