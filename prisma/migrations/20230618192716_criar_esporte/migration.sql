/*
  Warnings:

  - You are about to drop the column `esporte` on the `usuario` table. All the data in the column will be lost.
  - Added the required column `id_esporte` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `usuario` DROP COLUMN `esporte`,
    ADD COLUMN `id_esporte` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Esporte` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Esporte_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_esporte_fkey` FOREIGN KEY (`id_esporte`) REFERENCES `Esporte`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
