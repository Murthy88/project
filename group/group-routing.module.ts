import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { AdditemgroupComponent } from './additemgroup/additemgroup.component';
import { EdititemgroupComponent } from './edititemgroup/edititemgroup.component';
import { GroupComponent } from './group.component';
import { ViewitemgroupComponent } from './viewitemgroup/viewitemgroup.component';

const routes: Routes = [{ path: '', component: GroupComponent,canActivate:[LoginGuard] },
                      {path:'add',component:AdditemgroupComponent,canActivate:[LoginGuard]},
                      {path:'edit/:id',component:EdititemgroupComponent},
                     {path:'view',component:ViewitemgroupComponent,canActivate:[LoginGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
