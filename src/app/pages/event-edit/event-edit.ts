import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-edit',
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './event-edit.html',
  styleUrls: ['./event-edit.css'],
})
export class EventEdit {
  editForm: FormGroup;
  loading = signal<boolean>(false);

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.editForm = this.fb.group({
      id: [null],
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
      category: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.http.get<any>(`http://localhost:8090/event/detail/${id}`, { withCredentials: true }).subscribe({
        next: (response) => {
          this.editForm.patchValue({
            id: response.id,
            title: response.title,
            date: response.date,
            time: response.time,
            location: response.location,
            description: response.description,
            category: response.category,
          });
        },
        error: () => {
          this.router.navigate(['/my-events']);
        }
      });
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.http.put('http://localhost:8090/event/update', this.editForm.value, { withCredentials: true }).subscribe({
        next: () => {
          alert('Etkinlik başarıyla güncellendi!');
          this.router.navigate(['/my-events']);
        },
        error: (error) => {
          alert(error.error?.message || 'Bir hata oluştu.');
        }
      });
    }
  }
}
