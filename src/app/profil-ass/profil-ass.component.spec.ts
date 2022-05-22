import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAssComponent } from './profil-ass.component';

describe('ProfilAssComponent', () => {
  let component: ProfilAssComponent;
  let fixture: ComponentFixture<ProfilAssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilAssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
