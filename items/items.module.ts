import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { AdditemComponent } from './additem/additem.component';
import { ViewitemComponent } from './viewitem/viewitem.component';
import { EdititemComponent } from './edititem/edititem.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{MatDialogModule} from "@angular/material/dialog";
import { SortDirective } from './directive/sort.directive';
import { ItemPipe } from './pipe/item.pipe'
@NgModule({
  declarations: [
    ItemsComponent,
    AdditemComponent,
    ViewitemComponent,
    EdititemComponent,
    SortDirective,
    ItemPipe,


  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class ItemsModule { }
