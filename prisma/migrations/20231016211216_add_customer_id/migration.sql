/*
  Warnings:

  - A unique constraint covering the columns `[customer_id]` on the table `Clube` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[customer_id]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/

-- AlterTable
ALTER TABLE `Usuario` ADD COLUMN `customer_id` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_customer_id_key` ON `Usuario`(`customer_id`);
