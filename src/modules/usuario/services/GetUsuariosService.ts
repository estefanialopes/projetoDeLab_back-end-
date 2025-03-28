import { UsuarioRepository } from '@modules/usuario/repositories'
import type { GetUsuarios, UsuarioModel } from '@modules/usuario/types'

export class GetUsuariosService {
  async execute(parametros: GetUsuarios): Promise<UsuarioModel[]> {
    return await UsuarioRepository.findAndCountAll(parametros)
  }
}
