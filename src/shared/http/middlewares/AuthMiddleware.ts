import { type NextFunction, type Request, type Response } from 'express'
import { verify } from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '@modules/usuario/jwt/auth'
import ErrorHandler from '@shared/utils/errors/errorHandler'

export function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
  const auth = request.headers?.authorization
  if (!auth) {
    throw new ErrorHandler(401, 'Não Autorizado.')
  }
  const [, token] = auth.split(' ')

  try {
    verify(token, JWT_SECRET_KEY)
    next()
  } catch (erro) {
    throw new ErrorHandler(401, 'Não Autorizado.')
  }
}
