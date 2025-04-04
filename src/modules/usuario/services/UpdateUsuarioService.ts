import { UsuarioRepository } from '@modules/usuario/repositories'
import type { UpdateUsuario } from '@modules/usuario/types'

export class UpdateUsuarioService {
  async execute(id: string, dadosUsuario: UpdateUsuario): Promise<void> {
    await UsuarioRepository.update(id, dadosUsuario)
  }
}
