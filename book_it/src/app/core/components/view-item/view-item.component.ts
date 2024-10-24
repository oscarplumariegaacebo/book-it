import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerLoadingComponent } from '../../../shared/components/spinner-loading/spinner-loading.component';
import { ItemsService } from '../../../shared/services/items.service';
import { CompaniesService } from '../../../shared/services/companies.service';
import { PaginatorComponent } from '../../../shared/components/paginator/paginator.component';

@Component({
  selector: 'app-view-item',
  standalone: true,
  imports: [SpinnerLoadingComponent, PaginatorComponent],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.css'
})
export class ViewItemComponent {
  @Input() items: any;

  company: string = '';
  allItems: any = [];
  itemsList: any = [];
  loading: boolean = false;
  itemsService = inject(ItemsService);
  companiesService = inject(CompaniesService);

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('company')!;
    this.company = name;

    this.companiesService.getIdCompanyByName(name).subscribe((id: any) => {
      this.itemsService.getItemsByCompanyId(id).subscribe((items: any) => {
        if(items != undefined) {
          this.loading = true;
          this.itemsList = items;
          this.allItems = items;
          this.items = items.slice(0,10);
        }
      })
    })
  }

  updateItems(items: any){
    this.itemsList = items;
    this.items = items;
  }

  returnPage(){
    this.router.navigate(['']);
  }
}
