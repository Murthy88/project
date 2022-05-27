import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
                         { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
                        { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),},
                         { path: 'lead', loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule) },
                         { path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
                         { path: 'contract', loadChildren: () => import('./contract/contract.module').then(m => m.ContractModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
