import { MigrationInterface, QueryRunner } from "typeorm";

export class NewaddColumnHola1687754994480 implements MigrationInterface {
    name = 'NewaddColumnHola1687754994480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_classification_enum" AS ENUM('DEV', 'QA', 'QA_LEAD', 'DEV_LEAD', 'PM', 'PO', 'RRHH', 'EM', 'MARKETING')`);
        await queryRunner.query(`CREATE TABLE "users" ("user_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying(100) NOT NULL, "last_name" character varying(100) NOT NULL, "password" character varying(100) NOT NULL, "email" character varying(100) NOT NULL, "classification" "public"."users_classification_enum" NOT NULL, "phone" integer NOT NULL DEFAULT '0', "dni" character varying(50) NOT NULL, "nickname" character varying NOT NULL, "status" integer NOT NULL DEFAULT '1', CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_5fe9cfa518b76c96518a206b350" UNIQUE ("dni"), CONSTRAINT "PK_96aac72f1574b88752e9fb00089" PRIMARY KEY ("user_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_classification_enum"`);
    }

}
