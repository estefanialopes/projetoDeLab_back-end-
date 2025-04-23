import { CreateLivroService, UpdateLivroService, GetLivroService, GetLivrosService, DeleteLivroService } from '@modules/livro/services'
import { UpdateLivro, GetLivros, CreateLivro } from "../types"
import { type Request, type Response } from 'express'
export class LivroController { 
   async createLivro(request: Request, response: Response): Promise<any> {
      const createLivroService = new CreateLivroService()
      const resp =  await createLivroService.execute(request.body as unknown as CreateLivro)
      return response.json({statuscode: 200, body: resp})
    }
  
    async updateLivro(request: Request, response: Response) {
      const { id } = request.params
      const updateLivroService = new UpdateLivroService()
      await updateLivroService.execute(id, request.body as UpdateLivro)
      response.json({ body: 'No Content'})
    }
  
    async getLivro(request: Request, response: Response) {
      const { id } = request.params
      const getLivroService = new GetLivroService()
      const resp = await getLivroService.execute(id)
      response.json({body: resp})
    }
  
    async getLivros(request: Request, response: Response) {
      const getLivrosService = new GetLivrosService()
      const resp = await getLivrosService.execute(request.query as unknown as GetLivros)
      response.json({statusCode: 200, body: resp})
    }
  
    async deleteLivro(request: Request, response: Response) {
      const { id } = request.params
      const deleteLivroService = new DeleteLivroService()
      await deleteLivroService.execute(Number(id))
      response.json({body: 'Livro excluído com sucesso!'})
    }
}