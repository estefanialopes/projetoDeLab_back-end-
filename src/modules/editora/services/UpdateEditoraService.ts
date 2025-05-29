import { EditoraRepository } from "../repositories";
import { UpdateEditora } from "../types";


export class UpdateEditoraService {
  async execute(id: string, dadosEditora: UpdateEditora): Promise<void> {
    await EditoraRepository.update(id, dadosEditora)
  }
}
