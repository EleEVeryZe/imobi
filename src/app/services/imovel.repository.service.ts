import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Endereco, Imovel } from '../model/imovel.model';

@Injectable({
  providedIn: 'root'
})
export class ImovelRepositoryService {

  httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
  }

  getAll() : Observable<Imovel[]> {
    return this.httpClient.get("resource/imoveis.json", { responseType: 'text' }).pipe(map(txt => JSON.parse(txt)), map(imoveis => imoveis.map((imovel: Imovel) => this.rehydrateObj(imovel))));    
  }

  get(id: string) : Imovel | void {
    return;
  }

  rehydrateObj(imovel: any) {
    let obj = Object.assign(new Imovel(), imovel);
    obj.endereco = Object.assign(new Endereco(), imovel.endereco)
    return obj;
  }
}