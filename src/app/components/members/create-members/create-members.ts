import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from "primeng/button";
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-create-members',
  imports: [ReactiveFormsModule, InputTextModule, MessageModule, TextareaModule, ButtonModule, DatePickerModule, SelectModule],
  templateUrl: './create-members.html',
  styleUrl: './create-members.scss'
})
export class CreateMembers implements OnInit {
  memberForm!: FormGroup;
  submitted: boolean = false;
  relationShipStatusOptions: any = [
    { label: 'Marrid', value: 'marrid' },
    { label: 'Unmarrid', value: 'unmarrid' }
  ]

  private readonly formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({
      memberName: ["", Validators.required],
      mobileNo: ["", Validators.required],
      homeAddress: ["", Validators.required],
      businessAddress: ["", Validators.required],
      homeMobileNo: ["", Validators.required],
      village: ["", Validators.required],
      tehsil: ["", Validators.required],
      district: ["", Validators.required],
      familyMembers: this.formBuilder.array([this.createFamilyMember()])
    })
  }

  get familyMembers(): FormArray {
    return this.memberForm.get('familyMembers') as FormArray;
  }

  createFamilyMember(): FormGroup {
    return this.formBuilder.group({
      familyMemberName: ["", Validators.required],
      relation: ["", Validators.required],
      birthDate: ["", Validators.required],
      education: ["", Validators.required],
      relationshipStatus: ["", Validators.required],
      business: ["", Validators.required],
      bloodGroup: ["", Validators.required]
    });
  }

  addFamilyMember(): void {
    this.familyMembers.push(this.createFamilyMember());
  }

  removeFamilyMember(index: number): void {
    this.familyMembers.removeAt(index);
  }

  isInvalid(controlName: string, form: FormGroup | AbstractControl = this.memberForm) {
    const group = form as FormGroup;
    const control = group.get(controlName);
    return control?.invalid && (control?.dirty || control?.touched || this.submitted)
  }

  submitForm() {

  }

  resetForm() {
    this.submitted = false;
    this.memberForm.reset();
    this.familyMembers.clear();
    this.familyMembers.push(this.createFamilyMember());
  }
}
