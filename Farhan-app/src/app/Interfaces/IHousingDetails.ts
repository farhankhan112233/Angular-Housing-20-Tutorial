export interface IhousingDetails {
  id?: number;
  name: string;
  city: string;
  state: string;
  photo: File[];
  availableUnits: number;
  wifi: string;
  laundry: string;
  description: string;
}
