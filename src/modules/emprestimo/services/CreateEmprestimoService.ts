import { EmprestimoRepository } from "../repositories";
import { CreateEmprestimo, EmprestimoModel } from "../types";

export class CreateEmprestimoService {
  async execute(dados: CreateEmprestimo): Promise<EmprestimoModel> {
    const emprestimo = EmprestimoRepository.create(dados);
    return await EmprestimoRepository.save(emprestimo);
  }
}
