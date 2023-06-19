/*
  Warnings:

  - The primary key for the `esporte` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_id_esporte_fkey`;

-- AlterTable
ALTER TABLE `esporte` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuario` MODIFY `id_esporte` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_esporte_fkey` FOREIGN KEY (`id_esporte`) REFERENCES `Esporte`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
