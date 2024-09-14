import { Component, inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api-service.service';
import { Router } from '@angular/router';
import { SpinnerLoadingComponent } from '../../../shared/components/spinner-loading/spinner-loading.component';

@Component({
  selector: 'app-main-select-company',
  standalone: true,
  imports: [SpinnerLoadingComponent],
  templateUrl: './main-select-company.component.html',
  styleUrl: './main-select-company.component.css'
})
export class MainSelectCompanyComponent {

  apiService = inject(ApiService);
  companies: any = [];
  loading:boolean = false;

  constructor(private router: Router){}

  ngOnInit() {
    this.apiService.getCompanies().subscribe((companies:any) => {
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
