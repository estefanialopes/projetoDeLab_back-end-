import { ExemplarRepository } from "../repositories/ExemplarRepository";
import { CreateExemplar, ExemplarModel } from "../types";

export class CreateExemplarService {
  async execute(dados: CreateExemplar): Promise<ExemplarModel> {
    const livro = ExemplarRepository.create(dados);
    return await ExemplarRepository.save(livro);
  }
}
