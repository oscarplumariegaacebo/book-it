import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../shared/services/api-service.service';
import { SpinnerLoadingComponent } from '../../../shared/components/spinner-loading/spinner-loading.component';

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

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('company')!;
    this.company = name;

    this.apiService.getIdCompanyByName(name).subscribe((id: any) => {
      this.apiService.getItemsByCompanyId(id).subscribe((items: any) => {
        if(items != undefined) {
          this.items = items;
          this.loading = true;
        }
      })
    })
  }
}
