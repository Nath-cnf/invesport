const prisma = require("../../server/database/prismaClient");

class PortfolioAtleta {
    async createToken(data) {
        return await prisma.portfolioAtleta.create({
            data
        });
    }

    async findAllImagensFromUser(userId) {
        return await prisma.portfolioAtleta.findMany({
            where: {
                user_id: userId
            }
        })
    }
}

const portfolioAtletaModel = new PortfolioAtleta();

module.exports = portfolioAtletaModel;