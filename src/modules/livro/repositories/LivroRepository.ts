import { AppDataSource } from "@config/typeorm/typeorm.config";
import { Livro } from "@modules/livro/entities";
import { FindOptionsSelect } from "typeorm";
import { GetLivros } from "@modules/livro/types"
import { WhereConditions } from "@modules/utils";
import { Exemplar } from "@modules/exemplar/entities";

const selectFields = [
  "id",
  "titulo",
  "autor",
  "anoPublicacao",
  "edicao",
  "idGenero",
  "idEditora"
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
        relations: ['exemplares'],
        order: {
          [sortColumn ?? 'id'] : sortDirection ?? 'ASC'
        },
        where
      })
    },
});
