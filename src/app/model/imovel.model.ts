export type TipoDeNegocio = 'ALUGAR' | 'COMPRAR' | 'TEMPORADA' | 'NOVOS' | 'LEILÃO';
export type TipoImovel = 'CASA' | 'APARTAMENTO' | "LOTE" | "Imovel Novo" | 'Condomínio de edifícios' | 'Terreno' | 'Comercial' |"Rural Condomínio de casas";
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
      return this.bairro + ", " + this.cidade + " - " + this.estado;
    }
}

export interface Filtro {
  tipo: string;
  operacao: string;
  localizacao: string;
}

export class Imovel {
    id!: string;
    descricao?: string;
    operacao !: TipoDeNegocio;
    tipoImovel !: TipoImovel;
    qtdQuartos !: number;
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
      return "R$" + this.valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}