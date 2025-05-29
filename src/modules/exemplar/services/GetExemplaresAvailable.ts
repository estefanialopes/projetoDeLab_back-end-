import { ExemplarRepository } from "../repositories/ExemplarRepository";

export class GetExemplaresAvailableService {
  async execute(idLivro: string): Promise<number> {
    return await ExemplarRepository.countAvailable(idLivro)
  }
}
