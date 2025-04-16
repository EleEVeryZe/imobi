export type TipoDeNegocio = 'ALUGAR' | 'COMPRAR' | 'TEMPORADA' | 'NOVOS' | 'LEILÃO';
export type TipoImovel = 'CASA' | 'APARTAMENTO' | "LOTE" | 'Condomínio de edifícios' | 'Terreno' | 'Comercial' |"Rural Condomínio de casas";
export interface Endereco {
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
}