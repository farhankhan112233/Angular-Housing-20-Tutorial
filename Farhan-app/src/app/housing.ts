import { Injectable } from '@angular/core';
import { IhousingDetails } from './IHousingDetails';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url: string = 'http://localhost:3000/locations';
  async getAllHousingLocations(): Promise<IhousingDetails[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<IhousingDetails | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
