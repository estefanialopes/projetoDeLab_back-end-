export interface EmprestimoModel {
    id: string;
    idExemplar: string;
    idUsuario: string;
    dataEmprestimo: string;
    dataProgramadaDevolucao: string;
    dataEntrega: string;
    multa: number;
}

export type CreateEmprestimo = Omit<EmprestimoModel, 'id'>

export type UpdateEmprestimo = Omit<Partial<EmprestimoModel>, 'id'>

export interface GetEmprestimo {
    id: string;
}

export interface GetEmprestimos extends EmprestimoModel {
    sortColumn?: string;
    sortDirection?: string;
    limit?: number;
}

export interface DeleteEmprestimo {
    id: string;
}