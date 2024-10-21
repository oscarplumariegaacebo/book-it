import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpinnerLoadingComponent } from '../../../shared/components/spinner-loading/spinner-loading.component';
import { ItemsService } from '../../../shared/services/items.service';
import { CompaniesService } from '../../../shared/services/companies.service';

@Component({
  selector: 'app-view-item',
  standalone: true,
  imports: [SpinnerLoadingComponent],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.css'
})
export class ViewItemComponent {
  company: string = '';
  items: Array<any> = [];
  loading: boolean = false;
  itemsService = inject(ItemsService);
  companiesService = inject(CompaniesService);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('company')!;
    this.company = name;

    this.companiesService.getIdCompanyByName(name).subscribe((id: any) => {
      this.itemsService.getItemsByCompanyId(id).subscribe((items: any) => {
        if(items != undefined) {
          this.items = items;
          this.loading = true;
        }
      })
    })
  }
}
