import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-validator-component',
  styleUrl: './form-validator-component.css',
  templateUrl: './form-validator-component.html',
})
export class FormValidatorComponent {

  cursos = ['Java','Python','Angular','Hibernate','Spring Data JPA','SQL']

  datosPersonales = new FormGroup({

    nombre = new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(30),Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/),]),
    apellidos = new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/),]),
    dni = new FormControl('',[Validators.required,Validators.pattern(/^([0-9]{8}|[XYZxyz][0-9]{7})[A-Za-z]$/),]),
    telefono = new FormControl ('',[Validators.required,Validators.pattern(/^(\+34)?[67][0-9]{8}$/),]),

  });

  datosCuenta = new FormGroup({

    usuario = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15),Validators.pattern(/^[A-Za-z][A-Za-z0-9_]*$/),]),
    email = new FormControl('',[Validators.required,Validators.email]),
    password = new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$/),]),

  })

  preferenciasCurso = new FormGroup({

    curso = new FormControl('',Validators.required),
    horas = new FormControl('',[Validators.required, Validators.min(2), Validators.max(40)]),
    codigoPostal = new FormControl ('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|[1-4][0-9]|5[0-2])[0-9]{3}$/),
    ]),





  })





}
