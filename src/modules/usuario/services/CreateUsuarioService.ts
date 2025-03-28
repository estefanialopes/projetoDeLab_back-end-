import { UsuarioRepository } from '@modules/usuario/repositories'
import type { AddUsuario, UsuarioModel } from '@modules/usuario/types'
import ErrorHandler from '@shared/utils/errors/errorHandler'
import { hash } from 'bcrypt'

export class CreateUsuarioService {
  async execute(dadosUsuario: AddUsuario): Promise<UsuarioModel> {
    const { nome, genero, telefone, endereco, dataNascimento, email, senha } = dadosUsuario
    const usuarioExiste = await UsuarioRepository.findByEmail(email)
    if (usuarioExiste) {
      throw new ErrorHandler(400, 'Este email já esta sendo utilizado.')
    }
    const hashedPassword = await hash(senha, 8)

    const usuario = UsuarioRepository.create({
      nome,
      genero,
      email,
      endereco,
      senha: hashedPassword,
      telefone,
      dataNascimento
    })
    return await UsuarioRepository.save(usuario)
  }
}
