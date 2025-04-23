import { CreateLivro, LivroModel } from "@modules/livro/types";
import { LivroRepository } from "@modules/livro/repositories";

export class CreateLivroService {
  async execute(dados: CreateLivro): Promise<LivroModel> {
    const livro = LivroRepository.create(dados);
    return await LivroRepository.save(livro);
  }
}
