import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BusinessCategoriesService {

  constructor(private http: HttpClient) { }

  private readonly api = 'http://127.0.0.1:8000';

  getCategories() {
    return this.http.get(this.api + '/businessCategories/list');
  }
}

