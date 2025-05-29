export interface EditoraModel {
  id: string;
  nome: string;
  email: string;
  endereco: string;
  telefone: string;
}

export type CreateEditora = Omit<EditoraModel, 'id'>

export type UpdateEditora = Omit<Partial<EditoraModel>, 'id'>

export interface GetEditora {
    id: string;
}

export interface GetEditoras extends EditoraModel {
    sortColumn?: string;
    sortDirection?: string;
    limit?: number;
}

export interface DeleteEditora {
    id: string;
}