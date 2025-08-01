import { type Request, type Response } from 'express'
import { AddUsuario, GetUsuarios, UpdateUsuario } from '../types/UsuarioTypes'
import {
  GetUsuarioService,
  GetUsuariosService,
  CreateUsuarioService,
  UpdateUsuarioService,
  DeleteUsuarioService
} from '@modules/usuario/services'


// Refatorar futuramente adicionar uma classe de factorie para injetar os services no controller
export class UsuarioController {
  async createUsuario(request: Request, response: Response): Promise<any> {
    const createUsuarioService = new CreateUsuarioService()
    const { nome, endereco, dataNascimento, email, senha } = request.body

    const resp =  await createUsuarioService.execute({
      nome,
      email,
      senha,
      endereco,
      dataNascimento,
      permissao: 'student'
    } as AddUsuario)
    const { senha: senhaUsuario, ...rest} = resp
    return response.json({statuscode: 200, body: rest})
  }

  async updateUsuario(request: Request, response: Response) {
    const { id } = request.params
    const updateUsuarioService = new UpdateUsuarioService()
    await updateUsuarioService.execute(id, request.body as UpdateUsuario)
    response.json({ body: 'No Content'})
  }

  async getUsuario(request: Request, response: Response) {
    const { id } = request.params
    const getUsuarioService = new GetUsuarioService()
    const resp = await getUsuarioService.execute(id)
    response.json({body: resp})
  }

  async getUsuarios(request: Request, response: Response) {
    const getUsuariosService = new GetUsuariosService()
    const {
      id,
      nome,
      email,
      senha,
      endereco,
      dataNascimento,
      sortColumn,
      sortDirection,
      limit
    } = request.query

    const resp = await getUsuariosService.execute({
      id,
      nome,
      email,
      senha,
      endereco,
      dataNascimento,
      sortColumn,
      sortDirection,
      limit
    } as GetUsuarios)

    response.json({statusCode: 200, body: resp})
  }

  async deleteUsuario(request: Request, response: Response) {
    const { id } = request.params
    const deleteUsuarioService = new DeleteUsuarioService()
    await deleteUsuarioService.execute(Number(id))
    response.json({body: 'Usuário excluído com sucesso!'})
  }
}
