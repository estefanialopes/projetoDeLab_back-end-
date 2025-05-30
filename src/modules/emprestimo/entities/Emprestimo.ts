import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EmprestimoModel } from "@modules/emprestimo/types";
import { Livro } from "@modules/livro/entities";
import { Exemplar } from "@modules/exemplar/entities";
import { Usuario } from "@modules/usuario/entities";

@Entity({ name: "emprestimo" })
export class Emprestimo implements EmprestimoModel {
  @PrimaryColumn()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "id_exemplar" })
  idExemplar!: string;

  @Column({ name: "id_usuario" })
  idUsuario!: string;

  @Column({ name: "data_emprestimo" })
  dataEmprestimo!: string;

  @Column({ name: "data_programada_devolucao" })
  dataProgramadaDevolucao!: string;

  @Column({ name: "data_entrega" })
  dataEntrega!: string;
  
  @Column({ name: "multa" })
  multa!: number;

  @OneToOne(()=> Exemplar)
  @JoinColumn({ name: "id_exemplar" })
  exemplar: Exemplar | undefined

  @OneToOne(()=> Usuario)
  @JoinColumn({ name: "id_usuario" })
  usuario: Usuario | undefined
}
