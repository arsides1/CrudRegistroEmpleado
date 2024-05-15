import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/model/area';
import { IdentifacionTipo } from 'src/app/model/identifacion-tipo';
import { Pais } from 'src/app/model/pais';
import { AreaService } from 'src/app/service/area.service';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { IdentificacionTipoService } from 'src/app/service/identificacion-tipo.service';
import { PaisService } from 'src/app/service/pais.service';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
  empleadoForm: FormGroup;
  empleadoId: number | null = null;
  areas: Area[] = [];
  identificacionTipos: IdentifacionTipo[] = [];
  paises: Pais[] = [];
  maxDate: string = new Date().toISOString().split('T')[0];
  
  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService, private route: ActivatedRoute, 
    private router: Router, private areaService: AreaService, private identificacionTipoService: IdentificacionTipoService,
    private paisService: PaisService,
  ) {
    this.empleadoForm = this.fb.group({
      primer_apellido: ['', [Validators.required, Validators.pattern('[A-Z]+'), Validators.maxLength(20)]],
      segundo_apellido: ['', [Validators.required, Validators.pattern('[A-Z]+'), Validators.maxLength(20)]],
      primer_nombre: ['', [Validators.required, Validators.pattern('[A-Z]+'), Validators.maxLength(20)]],
      otros_nombre: ['', [Validators.pattern('[A-Z ]*'), Validators.maxLength(50)]],
      pais_id: ['', Validators.required],
      identificacion_tipo_id: ['', Validators.required],
      numero_identificacion: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9-]+'), Validators.maxLength(20)]],
      fecha_ingreso: ['', Validators.required],
      area_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.empleadoId = +params.get('id')!;
      if (this.empleadoId) {
        this.empleadoService.getEmpleado(this.empleadoId).subscribe(data => {
          this.empleadoForm.patchValue(data);
        });
      }
    });
    this.loadOptions();
    this.convertInputsToUppercase();
  }

  maxDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    if (selectedDate > currentDate) {
      return { 'maxDate': true };
    }
    return null;
  }
  

  loadOptions(): void {
    this.areaService.getAreas().subscribe(data => {
      this.areas = data;
    });
    this.identificacionTipoService.getIdentifiacionTipos().subscribe(data => {
      this.identificacionTipos = data;
    });
    this.paisService.getPaises().subscribe(data => {
      this.paises = data;
    });
  }

  onSubmit(): void {
    if (this.empleadoForm.valid) {
      if (this.empleadoId) {
        console.log('Actualizando Empleado:', this.empleadoForm.value);
        this.empleadoService.updateEmpleado(this.empleadoId, this.empleadoForm.value).subscribe(() => {
          this.router.navigate(['/empleados']);
        });
      } else {
        console.log('Creando Empleado:', this.empleadoForm.value);
         this.empleadoService.createEmpleado(this.empleadoForm.value).subscribe(() => {
          this.router.navigate(['/empleados']);
        })
      }
    }
  }

  convertInputsToUppercase(): void {
    const fieldsToConvert = [
      'primer_apellido',
      'segundo_apellido',
      'primer_nombre',
      'otros_nombre',
      'numero_identificacion'
    ];

    fieldsToConvert.forEach(field => {
      this.empleadoForm.get(field)?.valueChanges.subscribe(value => {
        if (value) {
          this.empleadoForm.get(field)?.setValue(value.toUpperCase(), { emitEvent: false });
        }
      });
    });
  }
}