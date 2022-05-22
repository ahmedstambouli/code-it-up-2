import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerDhashComponent } from './owner-dhash.component';

describe('OwnerDhashComponent', () => {
  let component: OwnerDhashComponent;
  let fixture: ComponentFixture<OwnerDhashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerDhashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerDhashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
