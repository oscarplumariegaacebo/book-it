import { Component, inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-select-company',
  standalone: true,
  imports: [],
  templateUrl: './main-select-company.component.html',
  styleUrl: './main-select-company.component.css'
})
export class MainSelectCompanyComponent {

  apiService = inject(ApiService);
  companies: any = [];

  constructor(private router: Router){}

  ngOnInit() {
    this.apiService.getCompanies().subscribe((companies:any) =>{
      this.companies = companies;
    })
  }

  selectCompany(name: string){
    this.router.navigate(['menu',name]);
  }
}
