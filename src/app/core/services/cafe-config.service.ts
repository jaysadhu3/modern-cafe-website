import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CafeConfig } from '../models/cafe-config.model';

@Injectable({
  providedIn: 'root'
})
export class CafeConfigService {

  constructor(private http: HttpClient) {}

  getConfig(): Observable<CafeConfig> {
    return this.http.get<CafeConfig>('cafe-config.json');
  }
}