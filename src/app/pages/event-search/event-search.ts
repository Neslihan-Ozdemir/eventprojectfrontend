import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-search',
  imports: [RouterModule, CommonModule],
  templateUrl: './event-search.html',
  styleUrls: ['./event-search.css'],
})
export class EventSearch {
  events = signal<any[]>([]);
  pages = signal<number[]>([]);
  activePage = signal<number>(0);
  loading = signal<boolean>(false);
  searchQuery = signal<string>('');
  totalElements = signal<number>(0);

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const q = params['q'] || '';
      this.searchQuery.set(q);
      this.searchEvents(q, 0);
    });
  }

  searchEvents(q: string, page: number = 0) {
    this.activePage.set(page);
    this.loading.set(true);
    this.http.get<any>(`http://localhost:8090/event/search?q=${q}&page=${page}`, { withCredentials: true }).subscribe({
      next: (response) => {
        this.events.set(response.content);
        this.totalElements.set(response.page.totalElements);
        const pagesArray = Array.from({ length: response.page.totalPages }, (_, i) => i);
        this.pages.set(pagesArray);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }
}