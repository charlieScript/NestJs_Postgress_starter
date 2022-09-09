import { MigrationInterface, QueryRunner } from "typeorm";

export class fix1662725769703 implements MigrationInterface {
    name = 'fix1662725769703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "fffff"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "model" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "typre" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "typre"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP COLUMN "model"`);
        await queryRunner.query(`ALTER TABLE "cars" ADD "fffff" character varying NOT NULL`);
    }

}
