import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscritorDetalleComponent } from './escritor-detalle.component';

describe('EscritorDetalleComponent', () => {
  let component: EscritorDetalleComponent;
  let fixture: ComponentFixture<EscritorDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscritorDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscritorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
