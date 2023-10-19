-- CreateTable
CREATE TABLE `PortfolioAtleta` (
    `id` VARCHAR(191) NOT NULL,
    `imagem_portfolio` LONGBLOB NOT NULL,
    `tipo_image_portfolio` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortfolioClube` (
    `id` VARCHAR(191) NOT NULL,
    `imagem_portfolio` LONGBLOB NOT NULL,
    `tipo_imagem_portfolio` VARCHAR(191) NOT NULL,
    `clube_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PortfolioAtleta` ADD CONSTRAINT `PortfolioAtleta_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortfolioClube` ADD CONSTRAINT `PortfolioClube_clube_id_fkey` FOREIGN KEY (`clube_id`) REFERENCES `Clube`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
