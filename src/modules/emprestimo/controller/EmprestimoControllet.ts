import {
  CreateEmprestimoService,
  DeleteEmprestimoService,
  GetEmprestimoService,
  GetEmprestimosService,
  UpdateEmprestimoService,
} from "@modules/emprestimo/services";
import { type Request, type Response } from "express";
import { CreateEmprestimo, GetEmprestimos, UpdateEmprestimo } from "@modules/emprestimo/types";

export class EmprestimoController {
  async createEmprestimo(request: Request, response: Response): Promise<any> {
    const createEmprestimoService = new CreateEmprestimoService();
    const resp = await createEmprestimoService.execute(
      request.body as unknown as CreateEmprestimo
    );
    return response.json({ statuscode: 200, body: resp });
  }

  async updateEmprestimo(request: Request, response: Response) {
    const { id } = request.params;
    const updateEmprestimoService = new UpdateEmprestimoService();
    await updateEmprestimoService.execute(id, request.body as UpdateEmprestimo);
    response.json({ body: "No Content" });
  }

  async getEmprestimo(request: Request, response: Response) {
    const { id } = request.params;
    const getEmprestimoService = new GetEmprestimoService();
    const resp = await getEmprestimoService.execute(id);
    response.json({ body: resp });
  }

  async getEmprestimos(request: Request, response: Response) {
    const getEmprestimosService = new GetEmprestimosService();
    const resp = await getEmprestimosService.execute(
      request.query as unknown as GetEmprestimos
    );
    response.json({ statusCode: 200, body: resp });
  }

  async deleteEmprestimo(request: Request, response: Response) {
    const { id } = request.params;
    const deleteEmprestimoService = new DeleteEmprestimoService();
    await deleteEmprestimoService.execute(id);
    response.json({ body: "Emprestimo excluído com sucesso!" });
  }
}
