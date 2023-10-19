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

    async findTarefaById(tagId) {
        return await prisma.tarefaUsuario.findUnique({
            where: {
                id: tagId
            }
        })
    }

    async deleteTarefa(tagId) {
        return await prisma.tarefaUsuario.delete({
            where: {
                id: tagId
            }
        })
    }
}

const tarefaAtletaModel = new TarefaAtleta();

module.exports = tarefaAtletaModel;