import { Injectable } from '@angular/core';
import { Pais } from '../model/pais';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'http://127.0.0.1:8000/api/paises';

  constructor(private http: HttpClient) {}

  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrl);
  }

}
