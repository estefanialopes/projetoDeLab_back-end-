import { AppDataSource } from "@config/typeorm/typeorm.config";
import { FindOptionsSelect } from "typeorm";
import { WhereConditions } from "@modules/utils";
import { Editora } from "../entities";
import { GetEditoras } from "../types";

const selectFields = [
  "id",
  "nome",
  "endereco",
  "email",
  "telefone",
];

export const EditoraRepository = AppDataSource.getRepository(Editora).extend({
  async findById(id: string) {
    return await this.findOne({
      select: selectFields as FindOptionsSelect<Editora>,
      where: { id },
    });
  },

    async findAndCountAll(parametros: GetEditoras) {
      const { limit, sortColumn, sortDirection, ...rest } = parametros
      const whereConditions = new WhereConditions<GetEditoras>()
      const where = whereConditions.createWhereConditions(rest)
  
      return await this.find({
        select: selectFields as FindOptionsSelect<Editora>,
        take: limit ?? 10,
        order: {
          [sortColumn ?? 'id'] : sortDirection ?? 'ASC'
        },
        where
      })
    },
});
