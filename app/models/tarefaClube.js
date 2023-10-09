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
}

const tarefaClubeModel = new TarefaClube();

module.exports = tarefaClubeModel;