import { UsuarioRepository } from '@modules/usuario/repositories'

export class DeleteUsuarioService {
  async execute(id: number): Promise<void> {
    await UsuarioRepository.delete(id)
  }
}
