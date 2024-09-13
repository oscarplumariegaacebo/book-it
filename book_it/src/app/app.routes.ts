import { Routes } from '@angular/router';
import { MainSelectCompanyComponent } from './core/components/main-select-company/main-select-company.component';
import { ViewItemComponent } from './core/components/view-item/view-item.component';

export const routes: Routes = [
    { path: '', component:MainSelectCompanyComponent},
    { path: 'menu/:company', component:ViewItemComponent}
];
