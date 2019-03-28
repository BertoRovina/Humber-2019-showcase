import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdFormComponent } from './get-by-id-form.component';

describe('GetByIdFormComponent', () => {
  let component: GetByIdFormComponent;
  let fixture: ComponentFixture<GetByIdFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
