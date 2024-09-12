import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSelectCompanyComponent } from './main-select-company.component';

describe('MainSelectCompanyComponent', () => {
  let component: MainSelectCompanyComponent;
  let fixture: ComponentFixture<MainSelectCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSelectCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSelectCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
