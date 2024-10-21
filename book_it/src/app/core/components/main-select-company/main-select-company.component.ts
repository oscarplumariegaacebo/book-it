import { Component, inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api-service.service';
import { Router } from '@angular/router';
import { SpinnerLoadingComponent } from '../../../shared/components/spinner-loading/spinner-loading.component';
import { CompaniesService } from '../../../shared/services/companies.service';
import { BusinessCategoriesService } from '../../../shared/services/business-categories.service';

@Component({
  selector: 'app-main-select-company',
  standalone: true,
  imports: [SpinnerLoadingComponent],
  templateUrl: './main-select-company.component.html',
  styleUrl: './main-select-company.component.css',
})
export class MainSelectCompanyComponent {

  companiesService = inject(CompaniesService);
  bcService = inject(BusinessCategoriesService);
  companies: any = [];
  businessCategories: any = [];
  loading:boolean = false;

  constructor(private router: Router){}

  ngOnInit() {
    this.bcService.getCategories().subscribe((categories:any) => {
      this.businessCategories = categories;
      console.log(categories);
    })
    this.companiesService.getCompanies().subscribe((companies:any) => {
      if(companies != undefined){
        this.loading = true;
        this.companies = companies;
      }
    })
  }

  selectCompany(name: string){
    this.router.navigate(['menu',name]);
  }
}
