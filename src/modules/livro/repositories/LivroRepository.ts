import { AppDataSource } from "@config/typeorm/typeorm.config";
import { Livro } from "@modules/livro/entities";
import { FindOptionsSelect } from "typeorm";
import { GetLivros } from "@modules/livro/types"
import { WhereConditions } from "@modules/utils";

const selectFields = [
  "id",
  "isbn",
  "titulo",
  "autor",
  "anoPublicacao",
  "edicao",
];

export const LivroRepository = AppDataSource.getRepository(Livro).extend({
  async findById(id: string) {
    return await this.findOne({
      select: selectFields as FindOptionsSelect<Livro>,
      where: { id },
    });
  },

    async findAndCountAll(parametros: GetLivros) {
      const { limit, sortColumn, sortDirection, ...rest } = parametros
      const whereConditions = new WhereConditions<GetLivros>()
      const where = whereConditions.createWhereConditions(rest)
  
      return await this.find({
        select: selectFields as FindOptionsSelect<Livro>,
        take: limit ?? 10,
        order: {
          [sortColumn ?? 'id'] : sortDirection ?? 'ASC'
        },
        where
      })
    },
});
