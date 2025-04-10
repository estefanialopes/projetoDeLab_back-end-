import { LivroRepository } from '@modules/livro/repositories'
import type { LivroModel } from '@modules/livro/types'

export class GetLivroService {
  async execute(id: string): Promise<LivroModel | null> {
    return await LivroRepository.findById(id)
  }
}
