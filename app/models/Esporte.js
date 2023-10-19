const prisma = require("../../server/database/prismaClient");

class Esporte {
    async findAllEsportes() {
        return await prisma.esporte.findMany();
    }

    async getEsporteNome(esporteId) {
        if (esporteId) {
            return await prisma.esporte.findUnique({
                where: {
                    id: esporteId
                },
                select: {
                    nome: true
                }
            })
        }

        return undefined;
    }

    async findEsporteByName(esporteNome) {
        return await prisma.esporte.findUnique({
            where: {
                nome: esporteNome
            }
        })
    }
}

const esporteModel = new Esporte();

module.exports = esporteModel;