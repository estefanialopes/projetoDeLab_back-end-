import { UsuarioRepository } from '@modules/usuario/repositories'
import type { UsuarioModel } from '@modules/usuario/types'

export class GetUsuarioService {
  async execute(id: string): Promise<UsuarioModel | null> {
    return await UsuarioRepository.findById(id)
  }
}
