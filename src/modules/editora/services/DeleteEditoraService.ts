import { EditoraRepository } from "../repositories";

export class DeleteEditoraService {
  async execute(id: string): Promise<void> {
    await EditoraRepository.delete(id)
  }
}
