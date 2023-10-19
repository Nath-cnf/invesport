const prisma = require("../../server/database/prismaClient");

class TarefaClube {
    async createTarefa(data) {
        return await prisma.tarefaClube.create({
            data
        })
    }

    async getAllTarefasFromClube(clubeId) {
        return await prisma.tarefaClube.findMany({
            where: {
                owner_id: clubeId
            }
        })
    }

    async findTarefaById(tagId) {
        return await prisma.tarefaClube.findUnique({
            where: {
                id: tagId
            }
        })
    }

    async deleteTarefa(tagId) {
        return await prisma.tarefaClube.findUnique({
            where: {
                id: tagId
            }
        })
    }
}

const tarefaClubeModel = new TarefaClube();

module.exports = tarefaClubeModel;