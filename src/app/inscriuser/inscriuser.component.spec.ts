import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriuserComponent } from './inscriuser.component';

describe('InscriuserComponent', () => {
  let component: InscriuserComponent;
  let fixture: ComponentFixture<InscriuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
