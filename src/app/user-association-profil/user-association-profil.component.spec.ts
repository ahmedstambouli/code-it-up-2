import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssociationProfilComponent } from './user-association-profil.component';

describe('UserAssociationProfilComponent', () => {
  let component: UserAssociationProfilComponent;
  let fixture: ComponentFixture<UserAssociationProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAssociationProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssociationProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
