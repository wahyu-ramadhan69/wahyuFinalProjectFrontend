import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../interface/supplier';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private apiUrl = 'https://c701-223-255-229-67.ngrok-free.app';
  private accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbGFAZ21haWwuY29tIiwidXNlcklkIjoiNjUxMGVkMzQzNjcxMzNmZDZkMjMxZWNiIiwiaWF0IjoxNjk1NjA4MjA5LCJleHAiOjE3MDI4MDgyMDl9.AyheZHiR-YRP60Jk39ic0CzIj9O7ZShTwR-Q_DtPEO8';

  private headers = new HttpHeaders().set('x-access-token', this.accessToken);

  constructor(private http: HttpClient) {}

  getSuppliers(): Observable<Supplier[]> {
    return this.http
      .get<any>(`${this.apiUrl}/suppliers`, { headers: this.headers })
      .pipe(map((response) => response));
  }
}
