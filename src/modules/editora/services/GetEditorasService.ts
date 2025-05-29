import { EditoraRepository } from "../repositories";
import { GetEditoras, EditoraModel } from "../types";


export class GetEditorasService {
  async execute(params: GetEditoras): Promise<EditoraModel[]> {
    return await EditoraRepository.findAndCountAll(params)
  }
}
