const prisma = require("../../server/database/prismaClient");

class Clube {
    async createClube(data) {
        await prisma.clube.create({
            data
        });
    }
}

const clubeModel = new Clube();

module.exports = clubeModel;