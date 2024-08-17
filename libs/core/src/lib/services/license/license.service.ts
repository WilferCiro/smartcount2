import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {License} from "../../models/license";

@Injectable({
  providedIn: 'root',
})
export class LicenseService {

  constructor(private http: HttpClient){}

  public checkLicense(companyID: number): void {
    this.http.get<License>("http://127.0.0.1:4000/api/licenses?company=" + companyID)
      .subscribe(response => { 
        if (response.status === "inactive") {
          throw "La empresa existe, pero la licencia esta inactiva"
        }
      }
    );

    /*if (license.estado == "vencida") {
      throw "La empresa existe, pero la licencia esta inactiva";
    }*/
  }

}
