
import { type Request, type Response } from 'express'
import { CreateEditoraService, UpdateEditoraService, GetEditoraService, GetEditorasService, DeleteEditoraService } from '../services'
import { CreateEditora, UpdateEditora, GetEditoras } from '../types'


export class EditoraController { 
    async createEditora(request: Request, response: Response): Promise<any> {
      const createEditoraService = new CreateEditoraService()
      const resp =  await createEditoraService.execute(request.body as unknown as CreateEditora)
      return response.json({statuscode: 200, body: resp})
    }
  
    async updateEditora(request: Request, response: Response) {
      const { id } = request.params
      const updateEditoraService = new UpdateEditoraService()
      await updateEditoraService.execute(id, request.body as UpdateEditora)
      response.json({ body: 'No Content'})
    }
  
    async getEditora(request: Request, response: Response) {
      const { id } = request.params
      const getEditoraService = new GetEditoraService()
      const resp = await getEditoraService.execute(id)
      response.json({body: resp})
    }
  
    async getEditoras(request: Request, response: Response) {
      const getEditorasService = new GetEditorasService()
      const resp = await getEditorasService.execute(request.query as unknown as GetEditoras)
      response.json({statusCode: 200, body: resp})
    }
  
    async deleteEditora(request: Request, response: Response) {
      const { id } = request.params
      const deleteEditoraService = new DeleteEditoraService()
      await deleteEditoraService.execute(id)
      response.json({body: 'Editora excluído com sucesso!'})
    }
}