import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Waste, WasteComponent, WasteType} from '../../waste/waste.component';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

    createWaste(waste) {
    return this.http.post(
      `/admin/waste`
      , waste);
    }
    updateWaste(id, waste) {
      return this.http.put(
        `/admin/waste/${id}`
        , waste);
    }
    retrieveAllWaste() {
      return this.http.get<Waste[]>(`/admin/waste`);
    }
    retrieveWasteById(id) {
      return this.http.get<Waste>(`/admin/wasteById/${id}`);
    }
    deleteWaste(id) {
      return this.http.delete(`/admin/waste/${id}`);
    }
    retrieveAllWasteTypes() {
      return this.http.get<WasteType[]>(`/admin/wasteTypes`);
    }
    findByName(name) {
      return this.http.get<Waste>(`/search/${name}`);
    }
  findByNameExists(name) {
    return this.http.get<boolean>(`/exists/${name}`);
  }

}
