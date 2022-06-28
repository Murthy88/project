import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { AddroleComponent } from './addrole/addrole.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { EditroleComponent } from './editrole/editrole.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{MatDialogModule} from "@angular/material/dialog"
import { RolePipe } from './pipes/role.pipe';
import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    RoleComponent,
    AddroleComponent,
    ViewroleComponent,
    EditroleComponent,

    RolePipe,
       SortDirective
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule

  ]
})
export class RoleModule { }
