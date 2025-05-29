import { ExemplarRepository } from "../repositories/ExemplarRepository";
import { ExemplarModel } from "../types";

export class GetExemplarService {
  async execute(id: string): Promise<ExemplarModel | null> {
    return await ExemplarRepository.findById(id)
  }
}
