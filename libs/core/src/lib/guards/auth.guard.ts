import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { AuthService } from "../services/authentication/auth.service";
import { Observable } from "rxjs";
import { inject } from "@angular/core";

export const AuthGuard: CanActivateFn = () => {
  
  return localStorage.getItem("token") != null ? true : inject(Router).navigateByUrl("/");
}