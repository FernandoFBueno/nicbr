import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class CollectorService {

  apiColletor = '/urlCollector/collector.json';

  constructor(private http: HttpClient) {}

  getCollector() {
    return this.http.get(this.apiColletor)
      .pipe(map((response: Response) => response));
  }
}
