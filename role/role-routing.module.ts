import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { HomeComponent } from '../home/home.component';
import { AddroleComponent } from './addrole/addrole.component';
import { EditroleComponent } from './editrole/editrole.component';
import { RoleComponent } from './role.component';
import { ViewroleComponent } from './viewrole/viewrole.component';

const routes: Routes = [{ path: '', component: RoleComponent,canActivate:[LoginGuard]  },
                       {path:'addrole',component:AddroleComponent ,canActivate:[LoginGuard]},
                        {path:'editrole/:id',component:EditroleComponent},
                         {path:'viewrole',component:ViewroleComponent,canActivate:[LoginGuard]},
                        {path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
