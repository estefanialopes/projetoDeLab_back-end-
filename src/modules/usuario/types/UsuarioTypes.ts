export interface UsuarioModel {
  id: string;
  nome: string;
  endereco: string;
  email: string;
  senha: string;
  telefone: string;
  genero: string;
  dataNascimento: string;
}

export type AddUsuario = Omit<UsuarioModel, 'id'>

export type UpdateUsuario = Omit<Partial<UsuarioModel>, 'id'>

export interface GetUsuario {
  id: string;
}

export interface GetUsuarios {
  id?: string;
  nome?: string;
  genero?: string;
  email?: string;
  telefone: string;
  dataNascimento?: string;
  sortColumn?: string;
  sortDirection?: string;
  limit?: number;
}

export interface DeleteUsuario {
  id: number;
}

export type tipoPermissao = 'adm' | 'teacher' | 'student'
