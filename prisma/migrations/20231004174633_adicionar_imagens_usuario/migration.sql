-- AlterTable
ALTER TABLE `Clube` ADD COLUMN `banner_image_type` VARCHAR(191) NULL,
    ADD COLUMN `banner_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil_type` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `banner_image_type` VARCHAR(191) NULL,
    ADD COLUMN `banner_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil` LONGBLOB NULL,
    ADD COLUMN `imagem_perfil_type` VARCHAR(191) NULL;
