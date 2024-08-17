import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../services/authentication/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const dsn = localStorage.getItem('dsn');
        const token = localStorage.getItem('token');
    

        const alterReq = req.clone({
            headers: req.headers.set("dsn", dsn ? dsn: "")
                .set("Authorization", token ? token : "")
        })

        return next.handle(alterReq)
    }
}