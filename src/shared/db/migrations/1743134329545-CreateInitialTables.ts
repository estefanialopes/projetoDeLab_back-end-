import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1743134329545 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE GENERO(
        IDGENERO varchar(50) NOT NULL PRIMARY KEY,
        NOME_GENERO VARCHAR(50) NOT NULL
        );

        CREATE TABLE EDITORA(
        IDEDITORA varchar(50) NOT NULL PRIMARY KEY,
        NOME_EDITORA VARCHAR(50) NOT NULL,
        ENDERECO VARCHAR(100) NOT NULL,
        TELEFONE VARCHAR(20) NOT NULL,
        EMAIL VARCHAR(50) NOT NULL
        );

        CREATE TABLE LIVRO(
        ID VARCHAR(50) not null primary key,
        ISBN VARCHAR(13) NOT null,
        TITULO VARCHAR(100) NOT NULL,
        AUTOR VARCHAR(100) NOT NULL,
        ANO_PUBLICACAO VARCHAR(50) NOT NULL,
        NUM_PAGS INT NOT NULL,
        QUANT_VOLUMES INT,
        NUM_VOLUME INT,
        EDICAO VARCHAR(45) NOT NULL,
        EDITORA_IDEDITORA VARCHAR(50) NOT NULL,
        GENERO_IDGENERO VARCHAR(50) NOT NULL,

        FOREIGN KEY (EDITORA_IDEDITORA) REFERENCES EDITORA(IDEDITORA),
        FOREIGN KEY (GENERO_IDGENERO) REFERENCES GENERO(IDGENERO)
        );


        CREATE TABLE USUARIO(
        ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        ENDERECO VARCHAR(100) NOT NULL,
        EMAIL VARCHAR(50) NOT NULL UNIQUE,
        SENHA VARCHAR(100) NOT NULL,
        NOME VARCHAR(100) NOT NULL,
        DATA_NASC DATE NOT NULL,
        GENERO VARCHAR(20) NOT NULL,
        TELEFONE VARCHAR(20) NOT NULL
        );

        CREATE TABLE EXEMPLAR(
        ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        ID_LIVRO VARCHAR(50) NOT NULL,
        TOMBO_PATRIMONIAL VARCHAR(50) NOT NULL UNIQUE,
        RESERVADO INTEGER DEFAULT 0,
        FOREIGN KEY (ID_LIVRO) REFERENCES LIVRO(ID)
        );

        CREATE TABLE EMPRESTIMO(
        IDEMPRESTIMO varchar(50) NOT NULL, 
        EXEMPLAR_TOMBO VARCHAR(50) NOT NULL,
        ID_USUARIO UUID NOT NULL,
        DATA_EMPRESTIMO DATE NOT NULL,
        DATA_PROGRAMADA_DEVOLUCAO DATE NOT NULL,
        DATA_ENTREGUE DATE,
        MULTA FLOAT,
        FOREIGN KEY (EXEMPLAR_TOMBO) REFERENCES EXEMPLAR(TOMBO_PATRIMONIAL),
        FOREIGN KEY (ID_USUARIO) REFERENCES USUARIO(ID),
        PRIMARY KEY(IDEMPRESTIMO)
        );
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE EMPRESTIMO`);
    await queryRunner.query(`DROP TABLE EXEMPLAR`);
    await queryRunner.query(`DROP TABLE USUARIO`);
    await queryRunner.query(`DROP TABLE LIVRO`);
    await queryRunner.query(`DROP TABLE EDITORA`);
    await queryRunner.query(`DROP TABLE GENERO`);
  }
}
