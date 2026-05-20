import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './event-list.html',
  styleUrls: ['./event-list.css'],
})
export class EventList {
  private http = inject(HttpClient);
  events = signal<any[]>([]);
  pages = signal<number[]>([]);
  activePage = signal<number>(0);
  loading = signal<boolean>(false);

  ngOnInit() {
    this.loadEvents(0);
  }

  loadEvents(page: number = 0) {
    this.activePage.set(page);
    this.loading.set(true);
    this.http.get<any>(`http://localhost:8090/event/list?page=${page}`, { withCredentials: true }).subscribe({
      next: (response) => {
        this.events.set(response.content);
        const pagesArray = Array.from({ length: response.page.totalPages }, (_, i) => i);
        this.pages.set(pagesArray);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error fetching events:', error);
        this.loading.set(false);
      }
    });
  }
}