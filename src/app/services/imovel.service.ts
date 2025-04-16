import { Injectable } from '@angular/core';
import { Imovel } from '../model/imovel.model';
import { ImovelRepositoryService } from './imovel.repository.service';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  constructor(private readonly repository: ImovelRepositoryService) { }

  getAll() : Imovel[] {
    return this.repository.getAll();
  }
}
