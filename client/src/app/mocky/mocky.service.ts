import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MockyService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('//localhost:9000/mocky');
  }
}
