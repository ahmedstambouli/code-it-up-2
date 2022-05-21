import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriassociationComponent } from './inscriassociation.component';

describe('InscriassociationComponent', () => {
  let component: InscriassociationComponent;
  let fixture: ComponentFixture<InscriassociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriassociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriassociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
