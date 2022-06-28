import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { ItemsComponent } from '../items/items.component';
import { LoginComponent } from '../login/login.component';
import { PriceComponent } from '../price/price.component';
import { PrivilageComponent } from '../privilage/privilage.component';
import { RoleComponent } from '../role/role.component';
import { UserComponent } from '../user/user.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent, canActivate:[LoginGuard] },
{path:'login',component:LoginComponent},
{path:'**',redirectTo:''},
{path:"role",component:RoleComponent},
{path:"items",component:ItemsComponent},
{path:'user',component:UserComponent},
 {path:'privilage',component:PrivilageComponent},
{path:'price',component:PriceComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
