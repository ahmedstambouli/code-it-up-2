import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefounderComponent } from './homefounder.component';

describe('HomefounderComponent', () => {
  let component: HomefounderComponent;
  let fixture: ComponentFixture<HomefounderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefounderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefounderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
