import { LivroRepository } from '@modules/livro/repositories'
import type { UpdateLivro } from '@modules/livro/types'

export class UpdateLivroService {
  async execute(id: string, dadosLivro: UpdateLivro): Promise<void> {
    await LivroRepository.update(id, dadosLivro)
  }
}
