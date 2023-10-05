const prisma = require("../../server/database/prismaClient");

class TarefaAtleta {
    async createTarefa(data) {
        return await prisma.tarefaUsuario.create({
            data
        });
    }

    async getAllTarefasFromUser(userId) {
        return await prisma.tarefaUsuario.findMany({
            where: {
                owner_id: userId
            }
        });
    }
}

const tarefaAtletaModel = new TarefaAtleta();

module.exports = tarefaAtletaModel;