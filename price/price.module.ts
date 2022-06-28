import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceRoutingModule } from './price-routing.module';
import { PriceComponent } from './price.component';
import { AddpriceComponent } from './addprice/addprice.component';
import { ViewpriceComponent } from './viewprice/viewprice.component';
import { EditpriceComponent } from './editprice/editprice.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SortDirective } from './directive/sort.directive';
import { PricePipe } from './pipes/price.pipe';

@NgModule({
  declarations: [
    PriceComponent,
    AddpriceComponent,
    ViewpriceComponent,
    EditpriceComponent,
    SortDirective,
    PricePipe
  ],
  imports: [
    CommonModule,
    PriceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PriceModule { }
