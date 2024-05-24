import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SousingListComponent } from './sousing-list.component';

describe('SousingListComponent', () => {
  let component: SousingListComponent;
  let fixture: ComponentFixture<SousingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SousingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SousingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
