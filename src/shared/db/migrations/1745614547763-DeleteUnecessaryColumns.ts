import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class DeleteUnecessaryColumns1745614547763 implements MigrationInterface {

     public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropColumn('livro', 'isbn');
        }
    
        public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.addColumn('livro', new TableColumn({
                name: 'isbn',
                type: 'varchar',
                length: '50',
                isNullable: true
            }));
        }

}
