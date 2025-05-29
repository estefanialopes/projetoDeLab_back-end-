import { AppDataSource } from "@config/typeorm/typeorm.config";
import { FindOptionsSelect } from "typeorm";
import { WhereConditions } from "@modules/utils";
import { GetEmprestimos } from "../types";
import { Emprestimo } from "../entities";


const selectFields = ["id", "tomboPatrimonial", "reservado", "idLivro"];

export const EmprestimoRepository = AppDataSource.getRepository(Emprestimo).extend({
  async findById(id: string) {
    return await this.findOne({
      select: selectFields as FindOptionsSelect<Emprestimo>,
      where: { id },
    });
  },


  async findAndCountAll(parametros: GetEmprestimos) {
    const { limit, sortColumn, sortDirection, ...rest } = parametros;
    const whereConditions = new WhereConditions<GetEmprestimos>();
    const where = whereConditions.createWhereConditions(rest);

    return await this.find({
      select: selectFields as FindOptionsSelect<Emprestimo>,
      take: limit ?? 10,
      order: {
        [sortColumn ?? "id"]: sortDirection ?? "ASC",
      },
      where,
    });
  },
});
