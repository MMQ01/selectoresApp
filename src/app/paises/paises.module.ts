import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PaisesRoutingModule } from './paises-routing.module';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SelectorPageComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PaisesRoutingModule,
  ],
  exports:[
    RouterModule
  ]
})
export class PaisesModule { }
