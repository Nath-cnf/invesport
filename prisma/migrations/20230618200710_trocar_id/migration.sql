/*
  Warnings:

  - The primary key for the `esporte` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `esporte` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_esporte` on the `usuario` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_id_esporte_fkey`;

-- AlterTable
ALTER TABLE `esporte` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuario` MODIFY `id_esporte` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_esporte_fkey` FOREIGN KEY (`id_esporte`) REFERENCES `Esporte`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
