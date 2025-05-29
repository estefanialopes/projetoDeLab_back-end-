import { ExemplarRepository } from "../repositories/ExemplarRepository";
import { UpdateExemplar } from "../types";

export class UpdateExemplarService {
  async execute(id: string, dadosExemplar: UpdateExemplar): Promise<void> {
    await ExemplarRepository.update(id, dadosExemplar)
  }
}
