import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddUsersPermitions1748638143324 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.addColumn(
        "usuario",
        new TableColumn({
          name: "permissao",
          type: "varchar",
          length: "50",
          isNullable: true,
        })
      );
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropColumn("usuario", "permissao");
  }
}
