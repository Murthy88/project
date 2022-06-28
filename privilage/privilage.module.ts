import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilageRoutingModule } from './privilage-routing.module';
import { PrivilageComponent } from './privilage.component';
import { ViewprivilagesComponent } from './viewprivilages/viewprivilages.component';
import { AddprivilagesComponent } from './addprivilages/addprivilages.component';
import { EditprivilagesComponent } from './editprivilages/editprivilages.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SortDirective } from './directives/sort.directive';
import { PrivilagePipe } from './pipes/privilage.pipe';
@NgModule({
  declarations: [
    PrivilageComponent,
    ViewprivilagesComponent,
    AddprivilagesComponent,
    EditprivilagesComponent,
    SortDirective,
    PrivilagePipe
  ],
  imports: [
    CommonModule,
    PrivilageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class PrivilageModule { }
