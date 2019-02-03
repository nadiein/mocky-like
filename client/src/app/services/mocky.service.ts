import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MockyService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:9000/mocky');
  }

  postMocky(mocky:any):Observable<any> {
    let result: Observable<Object>;
    if (mocky['id']) {
      result = this.http.put(mocky.id, mocky);
    } else {
      result = this.http.post('//localhost:9000/mocky', mocky);
    }
    return result;
  }

  deleteMocky(id): Observable<any> {
    return this.http.delete(`//localhost:9000/mocky/${id}`);
  }
}
