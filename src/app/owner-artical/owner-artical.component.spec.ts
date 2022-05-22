import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerArticalComponent } from './owner-artical.component';

describe('OwnerArticalComponent', () => {
  let component: OwnerArticalComponent;
  let fixture: ComponentFixture<OwnerArticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerArticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerArticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
