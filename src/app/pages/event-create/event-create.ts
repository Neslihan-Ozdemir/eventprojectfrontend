import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-create',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './event-create.html',
  styleUrls: ['./event-create.css'],
})
export class EventCreate {
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.createForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      category: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    });
  }

  onSubmit() {
    if (this.createForm.valid) {
      this.http.post('http://localhost:8090/event/create', this.createForm.value, { withCredentials: true }).subscribe({
        next: () => {
          alert('Etkinlik başarıyla oluşturuldu!');
          this.router.navigate(['/event-list']);
        },
        error: (error) => {
          alert(error.error?.message || 'Bir hata oluştu.');
        }
      });
    }
  }
}