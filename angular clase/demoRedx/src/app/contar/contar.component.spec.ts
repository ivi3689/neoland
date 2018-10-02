import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContarComponent } from './contar.component';

describe('ContarComponent', () => {
  let component: ContarComponent;
  let fixture: ComponentFixture<ContarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
