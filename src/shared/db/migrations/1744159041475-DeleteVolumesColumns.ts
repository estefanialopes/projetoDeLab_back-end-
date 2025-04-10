import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class DeleteVolumesColumns1744159041475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('livro', 'num_volume');
        await queryRunner.dropColumn('livro', 'num_pags');
        await queryRunner.dropColumn('livro', 'quant_volumes');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('livro', new TableColumn({
            name: 'num_volume',
            type: 'integer',
            isNullable: true
        }));

        await queryRunner.addColumn('livro', new TableColumn({
            name: 'num_pags',
            type: 'integer',
            isNullable: true
        }));

        await queryRunner.addColumn('livro', new TableColumn({
            name: 'quant_volumes',
            type: 'integer',
            isNullable: true
        }));
    }

}
