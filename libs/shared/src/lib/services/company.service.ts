import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {Company} from "../model/company";

@Injectable({
  providedIn: 'root',
})
export class CompanyService {

  constructor(private http: HttpClient) {}

  public checkCompany(companyName: string): Observable<Company> {
    return this.http.get<Company>("http://127.0.0.1:4000/api/companies?companyName=" + companyName.toLowerCase() + "&&dsn=true");
  }

}
