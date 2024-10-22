import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerLoadingComponent } from '../../../shared/components/spinner-loading/spinner-loading.component';
import { CompaniesService } from '../../../shared/services/companies.service';
import { BusinessCategoriesService } from '../../../shared/services/business-categories.service';
import { PaginatorComponent } from "../../../shared/components/paginator/paginator.component";

@Component({
  selector: 'app-main-select-company',
  standalone: true,
  imports: [SpinnerLoadingComponent, PaginatorComponent],
  templateUrl: './main-select-company.component.html',
  styleUrl: './main-select-company.component.css',
})
export class MainSelectCompanyComponent {
  @Input() companies: any;

  companiesService = inject(CompaniesService);
  bcService = inject(BusinessCategoriesService);
  businessCategories: any = [];
  loading:boolean = true;
  companiesList: any = [];
  allCompanies: any = [];

  constructor(private router: Router){
  }

  ngOnInit() {
    this.bcService.getCategories().subscribe((categories:any) => {
      this.businessCategories = categories;
    })
    this.companiesService.getCompanies().subscribe((companies:any) => {
      if(companies != undefined){
        this.loading = true;
        this.companiesList = companies;
        this.allCompanies = companies;
        this.companies = companies.slice(0,10);
      }
    })
  }

  updateItems(companies: any){
    this.companies = companies;
  }

  selectCompany(name: string){
    this.router.navigate(['menu',name]);
  }
}
