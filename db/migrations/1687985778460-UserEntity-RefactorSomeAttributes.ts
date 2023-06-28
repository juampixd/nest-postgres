import { MigrationInterface, QueryRunner } from "typeorm";

export class UserEntityRefactorSomeAttributes1687985778460 implements MigrationInterface {
    name = 'UserEntityRefactorSomeAttributes1687985778460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "classification"`);
        await queryRunner.query(`DROP TYPE "public"."users_classification_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "nickname"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "status"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "status" integer NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "nickname" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."users_classification_enum" AS ENUM('DEV', 'QA', 'QA_LEAD', 'DEV_LEAD', 'PM', 'PO', 'RRHH', 'EM', 'MARKETING')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "classification" "public"."users_classification_enum" NOT NULL`);
    }

}
