import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInitialTables1743134329545 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE GENERO(
        ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        NOME VARCHAR(50) NOT NULL
        );

        CREATE TABLE EDITORA(
        ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        NOME VARCHAR(50) NOT NULL,
        ENDERECO VARCHAR(100) NOT NULL,
        TELEFONE VARCHAR(20) NOT NULL,
        EMAIL VARCHAR(50) NOT NULL
        );

        CREATE TABLE LIVRO(
        ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        ISBN VARCHAR(13) NOT null,
        TITULO VARCHAR(100) NOT NULL,
        AUTOR VARCHAR(100) NOT NULL,
        ANO_PUBLICACAO VARCHAR(50) NOT NULL,
        NUM_PAGS INT NOT NULL,
        QUANT_VOLUMES INT,
        NUM_VOLUME INT,
        EDICAO VARCHAR(45) NOT NULL,
        ID_EDITORA UUID NOT NULL,
        ID_GENERO UUID NOT NULL,

        FOREIGN KEY (ID_EDITORA) REFERENCES EDITORA(ID),
        FOREIGN KEY (ID_GENERO) REFERENCES GENERO(ID)
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
        ID_LIVRO UUID NOT NULL,
        TOMBO_PATRIMONIAL VARCHAR(50) NOT NULL UNIQUE,
        RESERVADO INTEGER DEFAULT 0,
        FOREIGN KEY (ID_LIVRO) REFERENCES LIVRO(ID)
        );

        CREATE TABLE EMPRESTIMO(
        ID UUID PRIMARY KEY DEFAULT uuid_generate_v4(), 
        ID_EXEMPLAR UUID NOT NULL,
        ID_USUARIO UUID NOT NULL,
        DATA_EMPRESTIMO DATE NOT NULL,
        DATA_PROGRAMADA_DEVOLUCAO DATE NOT NULL,
        DATA_ENTREGUE DATE,
        MULTA FLOAT,
        FOREIGN KEY (ID_EXEMPLAR) REFERENCES EXEMPLAR(ID),
        FOREIGN KEY (ID_USUARIO) REFERENCES USUARIO(ID)
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
