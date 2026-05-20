import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  private http = inject(HttpClient);
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const registerData = this.registerForm.value;
      this.http.post('http://localhost:8090/users/register', registerData, { withCredentials: true }).subscribe({
        next: (response) => {
          alert('Kayıt başarılı! Giriş yapabilirsiniz.');
          window.location.href = '/';
        },
        error: (error) => {
          alert('Kayıt başarısız: ' + error.error.message);
        }
      });
    }
  }
}