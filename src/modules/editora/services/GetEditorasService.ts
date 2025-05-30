import { EditoraRepository } from "../repositories";
import { GetEditoras, EditoraModel } from "../types";


export class GetEditorasService {
  async execute(params: GetEditoras): Promise<{rows: number, value: EditoraModel[]}> {
    const [value, rows] = await EditoraRepository.findAndCountAll(params)
    return { rows, value };
  }
}
