import { Injectable } from '@angular/core';
import { IhousingDetails } from '../Interfaces/IHousingDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor(private httpService: HttpClient) {}
  getData(): Observable<IhousingDetails[]> {
    return this.httpService.get<IhousingDetails[]>(
      'https://localhost:7217/api/Housing/Get-Houses'
    );
  }
  getById(id: number): Observable<IhousingDetails> {
    return this.httpService.get<IhousingDetails>(
      'https://localhost:7217/api/Housing/' + id
    );
  }
}
