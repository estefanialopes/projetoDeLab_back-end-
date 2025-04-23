import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Livro } from "./Livro";

export interface GeneroModel {
  id: string;
  nome: string;
}

@Entity({ name: "Genero" })
export class Genero implements GeneroModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "nome" })
  nome!: string;

  @OneToMany((type) => Livro, (livro) => livro.idGenero)
  livros!: Livro[];
}
