-- CreateTable
CREATE TABLE `Clube` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `cnpj_clube` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clube_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ClubeToEsporte` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ClubeToEsporte_AB_unique`(`A`, `B`),
    INDEX `_ClubeToEsporte_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_ClubeToEsporte` ADD CONSTRAINT `_ClubeToEsporte_A_fkey` FOREIGN KEY (`A`) REFERENCES `Clube`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ClubeToEsporte` ADD CONSTRAINT `_ClubeToEsporte_B_fkey` FOREIGN KEY (`B`) REFERENCES `Esporte`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
