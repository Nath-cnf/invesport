-- AlterTable
ALTER TABLE `clube` ADD COLUMN `data_inauguracao` DATETIME(3) NULL,
    ADD COLUMN `descricao` VARCHAR(255) NULL,
    ADD COLUMN `premium` TINYINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `idade` INTEGER NULL;
