import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { AddroleComponent } from './addrole/addrole.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { EditroleComponent } from './editrole/editrole.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SerachPipe } from './pipes/serach.pipe';
import { SortDirective } from './sort.directive';

@NgModule({
  declarations: [
    AdminComponent,
    ViewuserComponent,
    AdduserComponent,
    ViewroleComponent,
    AddroleComponent,
    EditdetailsComponent,
    EditroleComponent,
    SerachPipe,
    SortDirective,


  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class AdminModule { }
