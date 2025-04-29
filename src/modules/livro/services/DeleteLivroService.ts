import { LivroRepository } from "@modules/livro/repositories";

export class DeleteLivroService {
  async execute(id: string): Promise<void> {
    await LivroRepository.delete(id)
  }
}
