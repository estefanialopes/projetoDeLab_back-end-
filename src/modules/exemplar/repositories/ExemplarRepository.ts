import { AppDataSource } from "@config/typeorm/typeorm.config";
import { FindOptionsSelect } from "typeorm";
import { WhereConditions } from "@modules/utils";
import { Exemplar } from "../entities";
import { GetExemplares } from "../types";

const selectFields = ["id", "tomboPatrimonial", "reservado", "idLivro"];

export const ExemplarRepository = AppDataSource.getRepository(Exemplar).extend({
  async findById(id: string) {
    return await this.findOne({
      select: selectFields as FindOptionsSelect<Exemplar>,
      where: { id },
    });
  },

  async countAvailable(idLivro: string) {
    return await this.count({ where: { idLivro: idLivro, reservado: 0 }})
  },

  async findAndCountAll(parametros: GetExemplares) {
    const { limit, sortColumn, sortDirection, ...rest } = parametros;
    const whereConditions = new WhereConditions<GetExemplares>();
    const where = whereConditions.createWhereConditions(rest);

    return await this.find({
      select: selectFields as FindOptionsSelect<Exemplar>,
      take: limit ?? 10,
      order: {
        [sortColumn ?? "id"]: sortDirection ?? "ASC",
      },
      where,
    });
  },
});
