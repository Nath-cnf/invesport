-- AlterTable
ALTER TABLE `clube` ADD COLUMN `banner_image_type` VARCHAR(191) NULL,
    ADD COLUMN `banner_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil_type` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `banner_image_type` VARCHAR(191) NULL,
    ADD COLUMN `banner_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil_type` VARCHAR(191) NULL;
