import {MigrationInterface, QueryRunner} from "typeorm";

export class user1575726046211 implements MigrationInterface {
    name = 'user1575726046211'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `phone` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `phone` `name` varchar(255) NOT NULL", undefined);
    }

}