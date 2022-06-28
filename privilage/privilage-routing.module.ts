import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { HomeComponent } from '../home/home.component';
import { AddprivilagesComponent } from './addprivilages/addprivilages.component';
import { EditprivilagesComponent } from './editprivilages/editprivilages.component';
import { PrivilageComponent } from './privilage.component';
import { ViewprivilagesComponent } from './viewprivilages/viewprivilages.component';

const routes: Routes = [{ path: '', component: PrivilageComponent,canActivate:[LoginGuard] },
                        {path:'addprivilage',component:AddprivilagesComponent,canActivate:[LoginGuard]},
                        {path:'viewprivilage',component:ViewprivilagesComponent,canActivate:[LoginGuard]},
                        {path:'editprivilage/:id',component:EditprivilagesComponent},
                        {path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivilageRoutingModule { }
