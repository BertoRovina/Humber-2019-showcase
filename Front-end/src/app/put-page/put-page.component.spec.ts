import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPageComponent } from './put-page.component';

describe('PutPageComponent', () => {
  let component: PutPageComponent;
  let fixture: ComponentFixture<PutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
