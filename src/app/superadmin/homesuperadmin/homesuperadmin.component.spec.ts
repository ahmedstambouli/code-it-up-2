import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesuperadminComponent } from './homesuperadmin.component';

describe('HomesuperadminComponent', () => {
  let component: HomesuperadminComponent;
  let fixture: ComponentFixture<HomesuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesuperadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
