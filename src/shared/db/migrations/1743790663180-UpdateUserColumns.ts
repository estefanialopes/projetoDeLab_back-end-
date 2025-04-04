import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateUserColumns1743790663180 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('usuario', 'genero');
        await queryRunner.dropColumn('usuario', 'telefone');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('usuario', new TableColumn({
            name: 'genero',
            type: 'varchar',
            length: '50',
            isNullable: true
        }));

        await queryRunner.addColumn('usuario', new TableColumn({
            name: 'telefone',
            type: 'varchar',
            length: '20',
            isNullable: true
        }));
    }

}
