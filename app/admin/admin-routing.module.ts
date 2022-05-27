import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { LoginComponent } from '../login/login.component';
import { SecondGuard } from '../guards/second.guard';
import { AddroleComponent } from './addrole/addrole.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EditroleComponent } from './editrole/editrole.component';

const routes: Routes = [{ path: '', component: AdminComponent,canActivate:[SecondGuard]},

                         {path:'addrole',component:AddroleComponent,canActivate:[LoginGuard]},
                        {path:'adduser',component:AdduserComponent,canActivate:[LoginGuard]},
                        {path:'editdetails/:id',component:EditdetailsComponent,},
                        {path:'viewrole',component:ViewroleComponent,canActivate:[LoginGuard]},
                         {path:'viewuser',component:ViewuserComponent,canActivate:[LoginGuard]},
                         {path:'editrole',component:EditroleComponent,canActivate:[LoginGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
