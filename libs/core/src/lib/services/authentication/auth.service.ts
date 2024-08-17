import {Injectable, inject} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Token } from "../../models/token"
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router, 
    private http: HttpClient
  ) {}

  public login(data: object) {
    this.http.post<Token>("http://127.0.0.1:8002/login", data).subscribe({ 
      next: (response) => { 
        localStorage.setItem("token", response.token);
        this.router.navigateByUrl('/dashboard/admin-dashboard')
      },
      error: () => { throw "erer" }
    });
  }


  logout(): void {
    localStorage.clear();
  }
}
