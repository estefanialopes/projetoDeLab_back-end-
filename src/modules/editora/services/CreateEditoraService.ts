import { EditoraRepository } from "../repositories";
import { CreateEditora, EditoraModel } from "../types";


export class CreateEditoraService {
  async execute(dados: CreateEditora): Promise<EditoraModel> {
    const Editora = EditoraRepository.create(dados);
    return await EditoraRepository.save(Editora);
  }
}
