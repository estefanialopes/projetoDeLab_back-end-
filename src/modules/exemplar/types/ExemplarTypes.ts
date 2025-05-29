export interface ExemplarModel {
    id: string;
    tomboPatrimonial: string;
    reservado: number;
    idLivro: string;
}

export type CreateExemplar = Omit<ExemplarModel, 'id'>

export type UpdateExemplar = Omit<Partial<ExemplarModel>, 'id'>

export interface GetExemplar {
    id: string;
}

export interface GetExemplares extends ExemplarModel {
    sortColumn?: string;
    sortDirection?: string;
    limit?: number;
}

export interface DeleteExemplar {
    id: string;
}