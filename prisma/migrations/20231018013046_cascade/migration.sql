-- DropForeignKey
ALTER TABLE `tarefaclube` DROP FOREIGN KEY `TarefaClube_owner_id_fkey`;

-- DropForeignKey
ALTER TABLE `tarefausuario` DROP FOREIGN KEY `TarefaUsuario_owner_id_fkey`;

-- DropForeignKey
ALTER TABLE `token` DROP FOREIGN KEY `Token_email_fkey`;

-- DropForeignKey
ALTER TABLE `usuario` DROP FOREIGN KEY `Usuario_id_esporte_fkey`;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_id_esporte_fkey` FOREIGN KEY (`id_esporte`) REFERENCES `Esporte`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Token` ADD CONSTRAINT `Token_email_fkey` FOREIGN KEY (`email`) REFERENCES `Usuario`(`email`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TarefaUsuario` ADD CONSTRAINT `TarefaUsuario_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TarefaClube` ADD CONSTRAINT `TarefaClube_owner_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `Clube`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
