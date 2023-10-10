const prisma = require("../../server/database/prismaClient");

class Clube {
    async createClube(data) {
        await prisma.clube.create({
            data
        });
    }

    async findUserById(usuarioId) {
        return await prisma.clube.findUnique({
            where: {
                id: usuarioId
            }
        })
    }

    async findUserByEmail(usuarioEmail) {
        return await prisma.clube.findUnique({
            where: {
                email: usuarioEmail
            }
        })
    }

    async updateUserSenha(novaSenha, email) {
        await prisma.clube.update({
            where: {
                email: email
            },
            data: {
                senha: novaSenha
            }
        })
    }

    async updateUser(data, userId) {
        await prisma.clube.update({
            where: {
                id: userId
            },
            data
        })
    }

    async getUserImage(userId) {
        return await prisma.clube.findUnique({
            where: {
                id: userId
            },
            select: {
                imagem_perfil,
                imagem_perfil_type
            }
        })
    }

    async getUserBanner(userId) {
        return await prisma.clube.findUnique({
            where: {
                id: userId
            },
            select: {
                banner_perfil,
                banner_image_type
            }
        })
    }
}

const clubeModel = new Clube();

module.exports = clubeModel;