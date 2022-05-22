import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarfounderComponent } from './navbarfounder.component';

describe('NavbarfounderComponent', () => {
  let component: NavbarfounderComponent;
  let fixture: ComponentFixture<NavbarfounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarfounderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarfounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
