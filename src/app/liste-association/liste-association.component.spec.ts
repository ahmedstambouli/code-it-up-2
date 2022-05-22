import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAssociationComponent } from './liste-association.component';

describe('ListeAssociationComponent', () => {
  let component: ListeAssociationComponent;
  let fixture: ComponentFixture<ListeAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeAssociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
