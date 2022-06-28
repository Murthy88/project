import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';
import { AddpriceComponent } from './addprice/addprice.component';
import { EditpriceComponent } from './editprice/editprice.component';
import { PriceComponent } from './price.component';
import { ViewpriceComponent } from './viewprice/viewprice.component';

const routes: Routes = [{ path: '', component: PriceComponent ,canActivate:[LoginGuard]},
                         {path:'edit/:id',component:EditpriceComponent},
                          {path:'view',component:ViewpriceComponent,canActivate:[LoginGuard]},
                          {path:'add',component:AddpriceComponent,canActivate:[LoginGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceRoutingModule { }
