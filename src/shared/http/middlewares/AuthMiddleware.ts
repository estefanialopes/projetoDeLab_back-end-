import { type NextFunction, type Request, type Response } from 'express'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '@modules/usuario/jwt/auth'
import ErrorHandler from '@shared/utils/errors/errorHandler'

export function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const token = request.headers?.authorization
  if (!token) {
    throw new ErrorHandler(401, 'Não Autorizado.')
  }

  try {
    verify(token, JWT_SECRET_KEY)
    next()
  } catch (erro) {
    console.log(erro)
    throw new ErrorHandler(401, 'Não Autorizado.')
  }
}
