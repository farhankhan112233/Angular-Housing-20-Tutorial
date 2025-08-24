import { Injectable } from '@angular/core';
import { IhousingDetails } from '../app/IHousingDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url: string = 'http://localhost:3000/locations';
  constructor(private httpService: HttpClient) {}
  getData(): Observable<IhousingDetails[]> {
    return this.httpService.get<IhousingDetails[]>(this.url);
  }
  getById(id: number): Observable<IhousingDetails> {
    return this.httpService.get<IhousingDetails>(this.url);
  }
}
