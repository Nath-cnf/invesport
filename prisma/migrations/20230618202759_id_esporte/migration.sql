/*
  Warnings:

  - You are about to drop the `esporte` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_id_esporte_fkey`;

-- DropTable
DROP TABLE `esporte`;
