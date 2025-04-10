import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { LivroModel } from "@modules/livro/types"

@Entity({ name: 'livro' })
export class Livro implements LivroModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column({ name: 'titulo' })
  titulo!: string

  @Column({ name: 'isnb' })
  isnb!: string

  @Column({ name: 'autor' })
  autor!: string

  @Column({ name: 'edicao' })
  edicao!: string
  
  @Column({  name: 'ano_publicacao' })
  anoPublicacao!: string

  @Column({ name: 'editora_ideditora' })
  idEditora!: string

  @Column({ name: 'genero_idgenero' })
  idGenero!: string

  @Column({ type: 'date', name: 'data_nasc' })
  dataNascimento!: string
}