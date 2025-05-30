import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import type { tipoPermissao, UsuarioModel } from '@modules/usuario/types'

@Entity({ name: 'usuario' })
export class Usuario implements UsuarioModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'nome' })
  nome!: string

  @Column({ name: 'token' })
  token!: string

  @Column({ name: 'endereco' })
  endereco!: string
  
  @Column({ name: 'email' })
  email!: string

  @Column({ name: 'permissao' })
  permissao!: tipoPermissao

  @Column({ name: 'senha' })
  senha!: string

  @Column({ type: 'date', name: 'data_nasc' })
  dataNascimento!: string
}
