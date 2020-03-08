import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePatientComponent } from './create-patient.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {PresentationComponentsModule} from '../presentation-components/presentation-components.module';
import {AkFormSubmitDirective} from '../ak-form-submit.directive';



@NgModule({
  declarations: [CreatePatientComponent, AkFormSubmitDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PresentationComponentsModule,
    RouterModule.forChild([
      {
        path: ':patientID',
        component: CreatePatientComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '0'
      }
    ])
  ]
})
export class CreatePatientModule { }
