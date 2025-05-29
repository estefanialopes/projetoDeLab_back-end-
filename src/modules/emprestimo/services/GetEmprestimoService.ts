import { EmprestimoRepository } from "../repositories";
import { EmprestimoModel } from "../types";

export class GetEmprestimoService {
  async execute(id: string): Promise<EmprestimoModel | null> {
    return await EmprestimoRepository.findById(id)
  }
}
