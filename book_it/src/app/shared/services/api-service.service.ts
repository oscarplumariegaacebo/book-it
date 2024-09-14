import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private readonly api = 'http://127.0.0.1:8000';

  getCompanies() {
    return this.http.get(this.api + '/company/list');
  }
  getIdCompanyByName(name:string){
    return this.http.get(this.api + '/company/getIdCompanyByName/'+name);
  }
  getItemsByCompanyId(id:number){
    return this.http.get(this.api + '/item/list/'+id);
  }
}
