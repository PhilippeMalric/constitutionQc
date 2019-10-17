import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutReglementComponent } from './statut-reglement.component';

describe('StatutReglementComponent', () => {
  let component: StatutReglementComponent;
  let fixture: ComponentFixture<StatutReglementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutReglementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutReglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
