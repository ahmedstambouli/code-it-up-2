import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRequestComponent } from './liste-request.component';

describe('ListeRequestComponent', () => {
  let component: ListeRequestComponent;
  let fixture: ComponentFixture<ListeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
