import { LivroRepository } from '@modules/livro/repositories'
import type { GetLivros, LivroModel } from '@modules/livro/types'

export class GetLivrosService {
  async execute(params: GetLivros): Promise<LivroModel[]> {
    return await LivroRepository.findAndCountAll(params)
  }
}
