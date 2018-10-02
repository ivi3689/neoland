import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTemplateComponent } from './formulario-template.component';

describe('FormularioTemplateComponent', () => {
  let component: FormularioTemplateComponent;
  let fixture: ComponentFixture<FormularioTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
