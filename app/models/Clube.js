const prisma = require("../../server/database/prismaClient");

class Clube {
    async createClube(data) {
        await prisma.clube.create({
            data
        });
    }

    async findUserByEmail(usuarioEmail) {
        return await prisma.clube.findUnique({
            where: {
                email: usuarioEmail
            }
        })
    }
}

const clubeModel = new Clube();

module.exports = clubeModel;