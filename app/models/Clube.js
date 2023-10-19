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

    async findAllClubes(clubeId) {
        return await prisma.clube.findMany({
            where: {
                NOT: {
                    id: clubeId
                }
            }
        });
    }

    async findAllClubesPesquisa(filtroPesquisa) {
        return await prisma.usuario.findMany({
            where: {
                OR: [
                    {
                        email: {
                            contains: filtroPesquisa
                        }
                    },
                    {
                        nome: {
                            contains: filtroPesquisa
                        }
                    },
                    {
                        id: {
                            contains: filtroPesquisa
                        }
                    }
                ]
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
                imagem_perfil: true,
                imagem_perfil_type: true
            }
        })
    }

    async getUserBanner(userId) {
        return await prisma.clube.findUnique({
            where: {
                id: userId
            },
            select: {
                banner_perfil: true,
                banner_image_type: true
            }
        })
    }
}

const clubeModel = new Clube();

module.exports = clubeModel;