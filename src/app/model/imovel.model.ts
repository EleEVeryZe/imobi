export type TipoDeNegocio = 'ALUGAR' | 'COMPRAR' | 'TEMPORADA' | 'NOVOS' | 'LEILÃO';
export type TipoImovel =
  | 'CASA'
  | 'APARTAMENTO'
  | 'LOTE'
  | 'Imovel Novo'
  | 'Condomínio de edifícios'
  | 'Terreno'
  | 'Comercial'
  | 'Rural Condomínio de casas';
export class Endereco {
  rua!: string;
  numero!: string;
  complemento?: string;
  bairro!: string;
  cidade!: string;
  estado!: string;
  cep!: string;
  pais?: string;
  pontoDeReferencia?: string;

  getEnderecoNaoExato() {
    return this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }

  static fromObject(obj: Partial<Endereco>): Endereco {
    return Object.assign(new Endereco(), obj);
  }
}

export interface IEndereco {
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
  pais?: string;
  pontoDeReferencia?: string;
}

export interface Filtro {
  tipo: string;
  operacao: string;
  localizacao: string;
}

export interface IImovel {
  id?: string;
  descricao: string;
  operacao: TipoDeNegocio;
  tipoImovel: TipoImovel;
  qtdQuartos: number;
  valor: number;
  valorCondominio: number;
  valorIPTU: number;
  endereco: IEndereco;
  areaTotalM2: number;
  areaConstruidaM2: number;
  quantidadeQuartos?: number;
  quantidadeBanheiros: number;
  quantidadeSuites: number;
  vagasGaragem: number;
  dataCadastro: Date;
  imagens?: string[];
  possuiPiscina: boolean;
  possuiQuintal: boolean;
  observacoes: string;
}

export class Imovel {
  id!: string;
  descricao?: string;
  operacao!: TipoDeNegocio;
  tipoImovel!: TipoImovel;
  qtdQuartos!: number;
  valor!: number;
  valorCondominio!: number;
  valorIPTU!: number;
  endereco!: Endereco;
  areaTotalM2!: number;
  areaConstruidaM2?: number;
  quantidadeQuartos!: number;
  quantidadeBanheiros!: number;
  quantidadeSuites?: number;
  vagasGaragem?: number;
  dataCadastro!: Date;
  imagens?: string[];
  possuiPiscina?: boolean;
  possuiQuintal?: boolean;
  observacoes?: string;

  capFirstLetterTipoDeNegocio() {
    return String(this.operacao).charAt(0).toUpperCase() + String(this.operacao).slice(1).toLowerCase();
  }

  getValorFormatado() {
    return 'R$' + this.valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  static parsePlainObjectIntoImovel({
    operacao,
    tipoImovel,
    descricao,
    qtdQuartos,
    valor,
    valorCondominio,
    valorIPTU,
    rua,
    numero,
    bairro,
    cidade,
    estado,
    cep,
    areaTotalM2,
    areaConstruidaM2,
    quantidadeBanheiros,
    quantidadeSuites,
    vagasGaragem,
    dataCadastro,
    possuiPiscina,
    possuiQuintal,
    observacoes,
  }: any): IImovel {
    return {
      operacao,
      tipoImovel,
      descricao,
      qtdQuartos,
      valor,
      valorCondominio,
      valorIPTU,
      endereco: { rua, numero, bairro, cidade, estado, cep },
      areaTotalM2,
      areaConstruidaM2,
      quantidadeBanheiros,
      quantidadeSuites,
      vagasGaragem,
      dataCadastro,
      possuiPiscina,
      possuiQuintal,
      observacoes,
    };
  }
}
