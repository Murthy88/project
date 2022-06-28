import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { EdituserComponent } from './edituser/edituser.component';

import { UserPipe } from './pipes/user.pipe';
import { SortDirective } from './directives/sort.directive';


@NgModule({
  declarations: [
    UserComponent,
    AdduserComponent,
    ViewusersComponent,
    EdituserComponent,
 
    UserPipe,
    SortDirective,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class UserModule { }
