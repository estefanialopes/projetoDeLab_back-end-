import { EditoraRepository } from "../repositories";
import { EditoraModel } from "../types";

export class GetEditoraService {
  async execute(id: string): Promise<EditoraModel | null> {
    return await EditoraRepository.findById(id)
  }
}
