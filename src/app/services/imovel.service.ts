import { Injectable } from '@angular/core';
import { Endereco, Filtro, Imovel } from '../model/imovel.model';
import { ImovelRepositoryService } from './imovel.repository.service';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  constructor(private readonly repository: ImovelRepositoryService) { }

  getAll() : Imovel[] {
    return this.repository.getAll();
  }

  getById(id: string) {
    return this.repository.get(id);
  }

  getAllEnderecos() : Endereco[] {
    const imoveis = this.repository.getAll();
    return imoveis.map(imovel => imovel.endereco);
  }

  getTipoImoveis() : string[] {
    return ["CASA", "APARTAMENTO", "LOTE", "COBERTURA", "COMERCIAL"];
  }

  filterBy(filtro: Filtro) : Imovel[] {
    let imoveisFiltrados = this.repository.getAll();
    
    if (filtro.localizacao)
      imoveisFiltrados = imoveisFiltrados.filter(imo => imo.endereco.getEnderecoNaoExato() === filtro.localizacao)

    if (filtro.tipo)
      imoveisFiltrados = imoveisFiltrados.filter(imo => imo.tipoImovel === filtro.tipo)

    if (filtro.operacao)
      imoveisFiltrados = imoveisFiltrados.filter(imo => imo.operacao === filtro.operacao)

    return imoveisFiltrados;
  }  
}
