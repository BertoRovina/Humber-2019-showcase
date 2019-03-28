import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPageComponent } from './get-page.component';

describe('GetPageComponent', () => {
  let component: GetPageComponent;
  let fixture: ComponentFixture<GetPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
