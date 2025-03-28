import { UsuarioRepository } from '@modules/usuario/repositories'
import type { UsuarioModel } from '@modules/usuario/types'

export class FindUsuarioByEmailService {
  async execute(email: string): Promise<UsuarioModel | null> {
    return await UsuarioRepository.findByEmail(email)
  }
}
