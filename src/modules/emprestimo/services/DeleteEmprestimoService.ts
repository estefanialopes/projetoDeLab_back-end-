import { EmprestimoRepository } from "../repositories/EmprestimoRepository";

export class DeleteEmprestimoService {
  async execute(id: string): Promise<void> {
    await EmprestimoRepository.delete(id)
  }
}
