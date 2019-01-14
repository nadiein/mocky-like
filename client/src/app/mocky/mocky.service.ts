import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MockyService {
  public API = '//localhost:9000';
  public MOCKY_API = this.API + '/mocky';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('//localhost:9000/mocky');
  }

  get(id: string) {
    return this.http.get(this.MOCKY_API + '/' + id);
  }

  save(mocky: any): Observable<any> {
    let result: Observable<Object>;
    if (mocky['href']) {
      result = this.http.put(mocky.href, mocky);
    } else {
      result = this.http.post(this.MOCKY_API, mocky);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
