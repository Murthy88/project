import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondGuard implements CanActivate {
  key:any;
  constructor(private route:Router){}
  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // localStorage.clear()
      this.key=localStorage.getItem('key');

if(this.key === ''){
  alert("You are not authorized to visit page");
  this.route.navigate(['login']);
  return false;
}
      else
      {
return true;
      }
  }

}
