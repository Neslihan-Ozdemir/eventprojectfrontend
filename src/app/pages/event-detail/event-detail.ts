import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  imports: [RouterModule, CommonModule],
  templateUrl: './event-detail.html',
  styleUrls: ['./event-detail.css'],
})
export class EventDetail {
  event = signal<any>(null);
  participants = signal<any[]>([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.http.get<any>(`http://localhost:8090/event/detail/${id}`, { withCredentials: true }).subscribe({
        next: (response) => {
          this.event.set(response);
        },
        error: () => {
          this.router.navigate(['/event-list']);
        }
      });
    });
  }

  join() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.post('http://localhost:8090/participant/join', { eventId: Number(id) }, { withCredentials: true }).subscribe({
      next: (response: any) => {
        alert(response.message);
      },
      error: (error) => {
        alert(error.error?.message || 'Bir hata oluştu.');
      }
    });
  }

  loadParticipants() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>(`http://localhost:8090/participant/list/${id}`, { withCredentials: true }).subscribe({
      next: (response) => {
        this.participants.set(response);
      },
      error: (error) => {
        console.error('Error fetching participants:', error);
      }
    });
  }
}
