import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMockGenreAndPublisher1745614735593
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          INSERT INTO editora (id, nome, endereco, telefone, email)
          VALUES (
            'cac50614-0e2f-4e1f-bc53-8f30f2dbf7b5',
            'Grupo Companhia das Letras.',
            'Rua das Flores, 123',
            '(11) 91234-5678',
            'grupo.flores@example.com'
          );
        `);

    await queryRunner.query(`
            INSERT INTO genero (id, nome)
            VALUES (
              '995ede40-bf63-4037-ba59-1d7516aa01a9',
              'Ficção'
            );
          `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          DELETE FROM editora WHERE email = 'grupo.flores@example.com';
        `);

    await queryRunner.query(`
            DELETE FROM genero WHERE id = '995ede40-bf63-4037-ba59-1d7516aa01a9';
          `);
  }
}
