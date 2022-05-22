import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideOwnerComponent } from './side-owner.component';

describe('SideOwnerComponent', () => {
  let component: SideOwnerComponent;
  let fixture: ComponentFixture<SideOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
