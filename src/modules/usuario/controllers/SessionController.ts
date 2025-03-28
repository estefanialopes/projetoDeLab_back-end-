import { CreateSessionService } from '@modules/usuario/services'
import { type Request, type Response } from 'express'
import { CreateSession } from '../types/LoginTypes'

export class SessionController {
  async create(request: Request, response: Response): Promise<any> {
    const { email, senha } = request.body
    const createSessionService = new CreateSessionService()
    const resp = await createSessionService.execute({ email, senha } as CreateSession)
    return response.json(resp)
  }
}
