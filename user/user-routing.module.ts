import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { HomeComponent } from '../home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserComponent } from './user.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [{ path: '', component: UserComponent,canActivate:[LoginGuard]  },
                        {path:'viewusers',component:ViewusersComponent,canActivate:[LoginGuard] },
                         {path:'adduser',component:AdduserComponent,canActivate:[LoginGuard] },
                          {path:'edituser/:id',component:EdituserComponent,},
                          {path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
