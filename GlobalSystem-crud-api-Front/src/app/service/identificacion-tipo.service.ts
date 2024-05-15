import { Injectable } from '@angular/core';
import { IdentifacionTipo } from '../model/identifacion-tipo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentificacionTipoService {

  private apiUrl = 'http://127.0.0.1:8000/api/identificacion_tipos';

  constructor(private http: HttpClient) {}

  getIdentifiacionTipos(): Observable<IdentifacionTipo[]> {
    return this.http.get<IdentifacionTipo[]>(this.apiUrl);
  }


  
}
