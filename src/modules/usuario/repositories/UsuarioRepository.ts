import { AppDataSource } from '@config/typeorm/typeorm.config'
import { Usuario } from '@modules/usuario/entities'
import { type GetUsuarios } from '@modules/usuario/types'
import { WhereConditions } from '@modules/utils'
import { FindOptionsSelect } from 'typeorm'

const selectFields = ['id', 'nome', 'sobrenome', 'permissao', 'email', 'dataCadastro']

export const UsuarioRepository = AppDataSource.getRepository(Usuario).extend({
  async findByName(nome: string, sobrenome: string) {
    return await this.createQueryBuilder('usuario')
      .where('usuario.nome = :nome', { nome })
      .andWhere('user.sobrenome = :sobrenome', { sobrenome })
      .getMany()
  },

  async findById(id: string) {
    return await this.findOne({
      select: selectFields as FindOptionsSelect<Usuario>,
      where: { id }
    })
  },

  async findAndCountAll(parametros: GetUsuarios) {
    const { limit, sortColumn, sortDirection, ...rest } = parametros
    const whereConditions = new WhereConditions<GetUsuarios>()
    const where = whereConditions.createWhereConditions(rest)

    return await this.find({
      select: selectFields as FindOptionsSelect<Usuario>,
      take: limit ?? 10,
      order: {
        [sortColumn ?? 'id'] : sortDirection ?? 'ASC'
      },
      where
    })
  },

  async findByEmail(email: string) {
    return await this.findOne({ where: { email } })
  }
})
