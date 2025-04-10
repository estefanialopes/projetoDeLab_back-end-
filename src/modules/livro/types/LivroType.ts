export interface LivroModel {
    id: string;
    isnb: string;
    titulo: string;
    autor: string;
    anoPublicacao: string;
    edicao: string;
    idGenero: string;
    idEditora: string;
}

export type CreateLivro = Omit<LivroModel, 'id'>

export type UpdateLivro = Omit<Partial<LivroModel>, 'id'>

export interface GetLivro {
    id: string;
}

export interface GetLivros extends LivroModel {
    sortColumn?: string;
    sortDirection?: string;
    limit?: number;
}

export interface DeleteLivro {
    id: string;
}