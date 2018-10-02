import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePlnetaComponent } from './detalle-plneta.component';

describe('DetallePlnetaComponent', () => {
  let component: DetallePlnetaComponent;
  let fixture: ComponentFixture<DetallePlnetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePlnetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePlnetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
