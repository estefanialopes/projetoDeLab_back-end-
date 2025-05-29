import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ExemplarModel } from "../types";
import { Livro } from "@modules/livro/entities";

@Entity({ name: "Exemplar" })
export class Exemplar implements ExemplarModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "tombo_patrimonial" })
  tomboPatrimonial!: string;

  @Column({ name: "reservado" })
  reservado!: number;

  @Column({ name: "id_livro" })
  idLivro!: string;

  @ManyToOne((type) => Livro, (livro) => livro.id)
  @JoinColumn({ name: 'id_livro' })
  livro!: Livro;
}
