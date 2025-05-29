import { EmprestimoRepository } from "../repositories";
import { GetEmprestimos, EmprestimoModel } from "../types";

export class GetEmprestimosService {
  async execute(params: GetEmprestimos): Promise<EmprestimoModel[]> {
    return await EmprestimoRepository.findAndCountAll(params)
  }
}
