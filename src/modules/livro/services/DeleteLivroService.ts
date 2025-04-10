import { LivroRepository } from "@modules/livro/repositories";

export class DeleteLivroService {
  async execute(id: number): Promise<void> {
    await LivroRepository.delete(id)
  }
}
