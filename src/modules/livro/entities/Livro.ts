import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LivroModel } from "@modules/livro/types";
import { Editora } from "../../editora/entities/Editora";
import { Genero } from "./Genero";
import { Exemplar } from "@modules/exemplar/entities/Exemplar";

@Entity({ name: "livro" })
export class Livro implements LivroModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "titulo" })
  titulo!: string;

  @Column({ name: "autor" })
  autor!: string;

  @Column({ name: "edicao" })
  edicao!: string;

  @Column({ name: "ano_publicacao" })
  anoPublicacao!: string;
  
  @Column({ name: "id_editora",})
  idEditora!: string;

  @Column({ name: "id_genero" })
  idGenero!: string;

  @ManyToOne((type) => Editora, (editora) => editora.livros)
  @JoinColumn({ name: 'id_editora' })
  editora!: Editora;

  @ManyToOne((type) => Genero, (genero) => genero.livros)
  @JoinColumn({ name: 'id_genero' })
  genero!: Genero;

  @OneToMany((type) => Exemplar, (exemplar) => exemplar.livro)
  exemplares!: Exemplar[];
}
