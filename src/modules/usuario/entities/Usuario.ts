import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import type { UsuarioModel } from '@modules/usuario/types'

@Entity({ name: 'usuario' })
export class Usuario implements UsuarioModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'nome' })
  nome!: string

  @Column({ name: 'endereco' })
  endereco!: string
  
  @Column({ name: 'genero' })
  genero!: string
  
  @Column({ name: 'telefone' })
  telefone!: string

  @Column({ name: 'email' })
  email!: string

  @Column({ name: 'senha' })
  senha!: string

  @Column({ type: 'date', name: 'data_nasc' })
  dataNascimento!: string
}
