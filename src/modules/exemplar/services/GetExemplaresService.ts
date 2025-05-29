import { ExemplarRepository } from "../repositories/ExemplarRepository";
import { GetExemplares, ExemplarModel } from "../types";

export class GetExemplaresService {
  async execute(params: GetExemplares): Promise<ExemplarModel[]> {
    return await ExemplarRepository.findAndCountAll(params)
  }
}
