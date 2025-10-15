import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
}
