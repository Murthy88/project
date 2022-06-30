import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { HomeComponent } from '../home/home.component';
import { AdditemComponent } from './additem/additem.component';
import { EdititemComponent } from './edititem/edititem.component';
import { ItemsComponent } from './items.component';
import { ViewitemComponent } from './viewitem/viewitem.component';

const routes: Routes = [{ path: '', component: ItemsComponent,canActivate:[LoginGuard] },
                          {path:'additem',component:AdditemComponent,canActivate:[LoginGuard]},
                         {path:"edititem/:id",component:EdititemComponent},
                         {path:"viewitem",component:ViewitemComponent,canActivate:[LoginGuard]},
                          {path:"home",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
