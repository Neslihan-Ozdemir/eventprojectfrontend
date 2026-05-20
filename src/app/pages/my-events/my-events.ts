import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-events',
  imports: [RouterModule, CommonModule],
  templateUrl: './my-events.html',
  styleUrls: ['./my-events.css'],
})
export class MyEvents {
  events = signal<any[]>([]);
  joinedEvents = signal<any[]>([]);
  pages = signal<number[]>([]);
  activePage = signal<number>(0);
  loading = signal<boolean>(false);
  activeTab = signal<string>('my');

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadEvents(0);
  }

  setTab(tab: string) {
    this.activeTab.set(tab);
    if (tab === 'my') {
      this.loadEvents(0);
    } else {
      this.loadJoinedEvents();
    }
  }

  loadEvents(page: number = 0) {
    this.activePage.set(page);
    this.loading.set(true);
    this.http.get<any>(`http://localhost:8090/event/my-events?page=${page}`, { withCredentials: true }).subscribe({
      next: (response) => {
        this.events.set(response.content);
        const pagesArray = Array.from({ length: response.page.totalPages }, (_, i) => i);
        this.pages.set(pagesArray);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  loadJoinedEvents() {
    this.loading.set(true);
    this.http.get<any[]>('http://localhost:8090/participant/my', { withCredentials: true }).subscribe({
      next: (response) => {
        this.joinedEvents.set(response);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  deleteEvent(id: number) {
    if (confirm('Etkinliği silmek istediğinizden emin misiniz?')) {
      this.http.delete(`http://localhost:8090/event/delete/${id}`, { withCredentials: true }).subscribe({
        next: () => {
          this.loadEvents(this.activePage());
        },
        error: (error) => {
          alert(error.error?.message || 'Bir hata oluştu.');
        }
      });
    }
  }

  updateStatus(id: number, status: string) {
    this.http.put(`http://localhost:8090/event/${status}/${id}`, {}, { withCredentials: true }).subscribe({
      next: (response: any) => {
        alert(response.message);
        this.loadEvents(this.activePage());
      },
      error: (error) => {
        alert(error.error?.message || 'Bir hata oluştu.');
      }
    });
  }
}