import { CreateSessionService, UpdateUsuarioService } from '@modules/usuario/services'
import { type Request, type Response } from 'express'
import { CreateSession } from '../types/LoginTypes'

export class SessionController {
  async create(request: Request, response: Response): Promise<any> {
    const { email, senha } = request.body
    const createSessionService = new CreateSessionService();
    const updateUsuarioService = new UpdateUsuarioService()
    const resp = await createSessionService.execute({ email, senha } as CreateSession);
    if(resp) {
      updateUsuarioService.execute(resp.id, {token: resp.token})
    }
    return response.json(resp)
  }
}
