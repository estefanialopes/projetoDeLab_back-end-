import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateTokenColumn1743795289714 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "usuario",
      new TableColumn({
        name: "token",
        type: "text",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("usuario", "token");
  }
}
