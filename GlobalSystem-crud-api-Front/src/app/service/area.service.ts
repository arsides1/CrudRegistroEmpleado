import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../model/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private apiUrl = 'http://127.0.0.1:8000/api/areas';

  constructor(private http: HttpClient) {}

  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.apiUrl);
  }


}
