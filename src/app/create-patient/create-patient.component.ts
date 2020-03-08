import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'ak-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  patientForm: FormGroup;
  countries = [];

  get medications(): FormArray {
    return this.patientForm.get('medications') as FormArray;
  }
  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.patientForm = this.createPatientForm();
    this.http.get('https://restcountries.eu/rest/v2/', {
      headers: {accept: 'application/json'}
    })
      .subscribe(countries => {
      this.countries = countries;
    });
  }

  createPatientForm(): FormGroup {
    return this.fb.group({
      patientID: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      age: [null],
      height: [null],
      heightUnit: [null],
      weight: [null],
      weightUnit: [null],
      gender: [null, Validators.required],
      country: [null],
      medications: this.fb.array([])
    });
  }

  createMedication(): FormGroup {
    return this.fb.group({
      medicationType: [null],
      medicationName: [null],
      medicationDosage: [null],
      medicationUnit: [null],
      medicationCount: [null],
      specifications: [null]
    });
  }

  enableMedications() {
    this.medications.enable();
    if (!this.medications.length) {
      this.addMedication();
    }
  }

  disableMedications() {
    this.medications.disable();
  }

  removeMedication(index) {
    this.medications.removeAt(index);
  }

  addMedication() {
    this.medications.push(this.createMedication());
  }

  createPatient() {
    this.http.post('patient/0', {...this.patientForm.value}).subscribe();
  }

}
