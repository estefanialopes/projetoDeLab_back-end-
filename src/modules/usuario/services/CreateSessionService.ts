import ErrorHandler from '@shared/utils/errors/errorHandler'
import { compare } from 'bcrypt'
import { UsuarioRepository } from '@modules/usuario/repositories'
import { type CreatedSession, type CreateSession } from '@modules/usuario/types'
import { sign } from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '@modules/usuario/jwt/auth'

export class CreateSessionService {
  async execute(dados: CreateSession): Promise<CreatedSession | null> {
    const { email, senha } = dados
    const usuario = await UsuarioRepository.findByEmail(email)
    if (!usuario) {
      throw new ErrorHandler(401, 'Login falhou: Usuário não encontrado/Credenciais inválidas.')
    }

    const senhaValida = await compare(senha, usuario.senha)
    if (!senhaValida) {
      throw new ErrorHandler(401, 'Login falhou: Usuário não encontrado/Credenciais inválidas.')
    }

    const payload = {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    }
    const token = sign(payload, JWT_SECRET_KEY, { subject: `${usuario.id}`, expiresIn: '1d' })
    const { senha: senhaRetorno, ...rest } = usuario
    return { ...rest, token }
  }
}
