-- DropIndex
DROP INDEX `Usuario_id_esporte_fkey` ON `usuario`;

-- CreateTable
CREATE TABLE `Esporte` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Esporte_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_esporte_fkey` FOREIGN KEY (`id_esporte`) REFERENCES `Esporte`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
