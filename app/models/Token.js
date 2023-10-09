const prisma = require("../../server/database/prismaClient");

class Token {
    async createToken(data) {
        return await prisma.token.create({
            data
        });
    }

    async findTokenById(tokenId) {
        return await prisma.token.findUnique({
            where: {
                id: tokenId
            }
        })
    }
}

const tokenModel = new Token();

module.exports = tokenModel;