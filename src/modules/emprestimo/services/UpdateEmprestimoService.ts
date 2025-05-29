import { EmprestimoRepository } from "../repositories";
import { UpdateEmprestimo } from "../types";

export class UpdateEmprestimoService {
  async execute(id: string, dadosEmprestimo: UpdateEmprestimo): Promise<void> {
    await EmprestimoRepository.update(id, dadosEmprestimo)
  }
}
