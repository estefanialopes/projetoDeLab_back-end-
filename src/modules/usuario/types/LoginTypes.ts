import { type UsuarioModel } from './UsuarioTypes'

export interface CreateSession {
  email: string;
  senha: string;
}

export interface CreatedSession extends Omit<UsuarioModel, 'senha'> {
}
