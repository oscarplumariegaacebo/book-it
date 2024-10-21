import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  constructor(private http: HttpClient) { }

  private readonly api = 'http://127.0.0.1:8000';

  getItemsByCompanyId(id:number){
    return this.http.get(this.api + '/item/list/'+id);
  }
}