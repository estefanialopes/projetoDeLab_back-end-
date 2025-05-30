export interface UsuarioModel {
  id: string;
  nome: string;
  endereco: string;
  email: string;
  senha: string;
  token: string;
  dataNascimento: string;
  permissao: tipoPermissao;
}

export type AddUsuario = Omit<UsuarioModel, 'id'>

export type UpdateUsuario = Omit<Partial<UsuarioModel>, 'id'>

export interface GetUsuario {
  id: string;
}

export interface GetUsuarios {
  id?: string;
  nome?: string;
  email?: string;
  dataNascimento?: string;
  sortColumn?: string;
  sortDirection?: string;
  limit?: number;
}

export interface DeleteUsuario {
  id: number;
}

export type tipoPermissao = 'adm' | 'student'