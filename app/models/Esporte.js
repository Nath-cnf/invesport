const prisma = require("../../server/database/prismaClient");

class Esporte {
    async findAllEsportes() {
        return await prisma.esporte.findMany();
    }
}

const esporteModel = new Esporte();

module.exports = esporteModel;