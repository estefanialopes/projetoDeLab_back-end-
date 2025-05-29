import { type Request, type Response } from "express";
import {
  CreateExemplarService,
  UpdateExemplarService,
  GetExemplarService,
  GetExemplaresService,
  DeleteExemplarService,
  GetExemplaresAvailableService,
} from "../services";
import { CreateExemplar, UpdateExemplar, GetExemplares } from "../types";

export class ExemplarController {
  async createExemplar(request: Request, response: Response): Promise<any> {
    const createExemplarService = new CreateExemplarService();
    const resp = await createExemplarService.execute(
      request.body as unknown as CreateExemplar
    );
    return response.json({ statuscode: 200, body: resp });
  }

  async updateExemplar(request: Request, response: Response) {
    const { id } = request.params;
    const updateExemplarService = new UpdateExemplarService();
    await updateExemplarService.execute(id, request.body as UpdateExemplar);
    response.json({ body: "No Content" });
  }

  async getExemplaresDisponiveis(request: Request, response: Response) {
    const { idLivro } = request.params;
    const getAvailableService = new GetExemplaresAvailableService();
    const resp = await getAvailableService.execute(idLivro);
    response.json({ body: { disponiveis: resp } });
  }

  async getExemplar(request: Request, response: Response) {
    const { id } = request.params;
    const getExemplarService = new GetExemplarService();
    const resp = await getExemplarService.execute(id);
    response.json({ body: resp });
  }

  async getExemplars(request: Request, response: Response) {
    const getExemplarsService = new GetExemplaresService();
    const resp = await getExemplarsService.execute(
      request.query as unknown as GetExemplares
    );
    response.json({ statusCode: 200, body: resp });
  }

  async deleteExemplar(request: Request, response: Response) {
    const { id } = request.params;
    const deleteExemplarService = new DeleteExemplarService();
    await deleteExemplarService.execute(id);
    response.json({ body: "Exemplar excluído com sucesso!" });
  }
}
