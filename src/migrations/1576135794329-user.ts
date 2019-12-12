import {MigrationInterface, QueryRunner} from "typeorm";

export class user1576135794329 implements MigrationInterface {
    name = 'user1576135794329'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone`", undefined);
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `address`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `address` varchar(255) NOT NULL", undefined);
        await queryRunner.query("ALTER TABLE `user` ADD `phone` varchar(255) NOT NULL", undefined);
    }

}
