import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Livro } from "../../livro/entities/Livro";
import { EditoraModel } from "../types";

@Entity({ name: "Editora" })
export class Editora implements EditoraModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "nome" })
  nome!: string;

  @Column({ name: "endereco" })
  endereco!: string;

  @Column({ name: "telefone" })
  telefone!: string;

  @Column({ name: "email" })
  email!: string;

  @OneToMany((type) => Livro, (livro) => livro.idEditora)
  livros!: Livro[]
}
