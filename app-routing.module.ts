import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, { path: 'role', loadChildren: () => import('./role/role.module').then(m => m.RoleModule) }, { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) }, { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, { path: 'privilage', loadChildren: () => import('./privilage/privilage.module').then(m => m.PrivilageModule) }, { path: 'group', loadChildren: () => import('./group/group.module').then(m => m.GroupModule) }, { path: 'price', loadChildren: () => import('./price/price.module').then(m => m.PriceModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
