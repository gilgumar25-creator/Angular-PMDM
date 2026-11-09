import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioReactivoComponent } from './formulario-reactivo-component';

describe('FormularioReactivoComponent', () => {
  let component: FormularioReactivoComponent;
  let fixture: ComponentFixture<FormularioReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioReactivoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioReactivoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
