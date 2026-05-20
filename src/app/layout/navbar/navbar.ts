import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  username: string = '';
  searchQuery: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || '';
  }

  logout() {
    this.http.get('http://localhost:8090/users/logout', { withCredentials: true }).subscribe({
      next: () => {
        localStorage.clear();
        window.location.href = '/';
      },
      error: () => {
        localStorage.clear();
        window.location.href = '/';
      }
    });
  }

  search() {
  if (this.searchQuery.trim()) {
    this.router.navigate(['/event-search'], { queryParams: { q: this.searchQuery } });
  }
}
}