import { ExemplarRepository } from "../repositories/ExemplarRepository";

export class DeleteExemplarService {
  async execute(id: string): Promise<void> {
    await ExemplarRepository.delete(id)
  }
}
