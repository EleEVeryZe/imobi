import { Injectable } from '@angular/core';
import { Imovel } from '../model/imovel.model';

@Injectable({
  providedIn: 'root'
})
export class ImovelRepositoryService {

  constructor() { }

  getAll() : Imovel[] {
    return all as unknown as Imovel[];
  }
}


const all = [
  {
    "id": "1",
    "descricao": "Casa com piscina e quintal",
    "operacao": "COMPRAR",
    "tipoImovel": "CASA",
    "qtdQuartos": 3,
    "valor": 750000,
    "valorCondominio": 0,
    "valorIPTU": 1200,
    "endereco": {
      "rua": "Rua A",
      "numero": "100",
      "bairro": "Jardins",
      "cidade": "São Paulo",
      "estado": "SP",
      "cep": "01000-000"
    },
    "areaTotalM2": 250,
    "areaConstruidaM2": 180,
    "quantidadeQuartos": 3,
    "quantidadeBanheiros": 2,
    "quantidadeSuites": 1,
    "vagasGaragem": 2,
    "dataCadastro": "2024-10-01T00:00:00.000Z",
    "imagens": ["cs2.png"],
    "possuiPiscina": true,
    "possuiQuintal": true,
    "observacoes": "Casa bem arejada, ótima localização"
  },
  {
    "id": "2",
    "descricao": "Apartamento moderno no centro",
    "operacao": "ALUGAR",
    "tipoImovel": "APARTAMENTO",
    "qtdQuartos": 2,
    "valor": 3200,
    "valorCondominio": 800,
    "valorIPTU": 200,
    "endereco": {
      "rua": "Av. Central",
      "numero": "255",
      "bairro": "Centro",
      "cidade": "Curitiba",
      "estado": "PR",
      "cep": "80000-000"
    },
    "areaTotalM2": 90,
    "areaConstruidaM2": 90,
    "quantidadeQuartos": 2,
    "quantidadeBanheiros": 1,
    "vagasGaragem": 1,
    "dataCadastro": "2025-01-15T00:00:00.000Z",
    "imagens": ["cs2.png", "cs3.png", "cs4.png"],
    "possuiPiscina": false,
    "possuiQuintal": false
  },
  {
    "id": "3",
    "descricao": "Cobertura com vista panorâmica",
    "operacao": "COMPRAR",
    "tipoImovel": "COBERTURA",
    "qtdQuartos": 4,
    "valor": 1500000,
    "valorCondominio": 1200,
    "valorIPTU": 3500,
    "endereco": {
      "rua": "Rua do Mirante",
      "numero": "12",
      "bairro": "Alto da Colina",
      "cidade": "Belo Horizonte",
      "estado": "MG",
      "cep": "30000-000"
    },
    "areaTotalM2": 300,
    "areaConstruidaM2": 280,
    "quantidadeQuartos": 4,
    "quantidadeBanheiros": 3,
    "quantidadeSuites": 2,
    "vagasGaragem": 3,
    "dataCadastro": "2024-11-05T00:00:00.000Z",
    "imagens": ["cs2.png", "cs3.png", "cs4.png"],
    "possuiPiscina": true,
    "possuiQuintal": false,
    "observacoes": "Cobertura de luxo com elevador privativo"
  },
  {
    "id": "4",
    "descricao": "Casa de veraneio",
    "operacao": "TEMPORADA",
    "tipoImovel": "CASA",
    "qtdQuartos": 3,
    "valor": 500,
    "valorCondominio": 0,
    "valorIPTU": 0,
    "endereco": {
      "rua": "Rua do Sol",
      "numero": "77",
      "bairro": "Praia Azul",
      "cidade": "Florianópolis",
      "estado": "SC",
      "cep": "88000-000"
    },
    "areaTotalM2": 180,
    "quantidadeQuartos": 3,
    "quantidadeBanheiros": 2,
    "quantidadeSuites": 1,
    "vagasGaragem": 1,
    "dataCadastro": "2025-03-01T00:00:00.000Z",
    "imagens": ["cs2.png", "cs4.png", "cs3.png"],
    "possuiPiscina": true,
    "possuiQuintal": true
  },
  {
    "id": "5",
    "descricao": "Apartamento em leilão",
    "operacao": "LEILÃO",
    "tipoImovel": "APARTAMENTO",
    "qtdQuartos": 2,
    "valor": 180000,
    "valorCondominio": 650,
    "valorIPTU": 900,
    "endereco": {
      "rua": "Rua do Comércio",
      "numero": "400",
      "bairro": "Centro",
      "cidade": "Porto Alegre",
      "estado": "RS",
      "cep": "90000-000"
    },
    "areaTotalM2": 75,
    "quantidadeQuartos": 2,
    "quantidadeBanheiros": 1,
    "vagasGaragem": 1,
    "dataCadastro": "2025-02-20T00:00:00.000Z",
    "possuiPiscina": false,
    "possuiQuintal": false,
    "observacoes": "Leilão judicial, somente à vista"
  }
]
