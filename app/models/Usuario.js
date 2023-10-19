const prisma = require("../../server/database/prismaClient");

class Usuario {
    async createUsuario(data) {
        await prisma.usuario.create({
            data
        });
    }

    async findUserById(usuarioId) {
        return await prisma.usuario.findUnique({
            where: {
                id: usuarioId
            },
            include: {
                esporte: true
            }
        })
    }

    async addChavePix(chavePix, userId) {
        return await prisma.usuario.update({
            where: {
                id: userId
            },
            data: {
                chave_pix: chavePix
            }
        })
    }

    async findUserByEmail(usuarioEmail) {
        return await prisma.usuario.findUnique({
            where: {
                email: usuarioEmail
            }
        })
    }

    async findAllUsers(userId) {
        return await prisma.usuario.findMany({
            where: {
                NOT: {
                    id: userId
                }
            }
        });
    }

    async updateUserSobre(data, userId) {
        return await prisma.usuario.update({
            where: {
                id: userId
            },
            data
        })
    }

    async updateUserSenha(novaSenha, email) {
        await prisma.usuario.update({
            where: {
                email: email
            },
            data: {
                senha: novaSenha
            }
        })
    }

    async updateUserCustomerId(userId, customerId) {
        return await prisma.usuario.update({
            where: {
                id: userId
            },
            data: {
                customer_id: customerId
            }
        })
    }

    async updateUser(data, userId) {
        await prisma.usuario.update({
            where: {
                id: userId
            },
            data
        })
    }

    async addUserPremiumByCustomerId(customerId) {
        await prisma.usuario.update({
            where: {
                customer_id: customerId
            },
            data: {
                premium: 1
            }
        })
    }

    async removeUserPremiumByCustomerId(customerId) {
        await prisma.usuario.update({
            where: {
                customer_id: customerId
            },
            data: {
                premium: 0
            }
        })
    }

    async getUserImage(userId) {
        return await prisma.usuario.findUnique({
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
        return await prisma.usuario.findUnique({
            where: {
                id: userId
            },
            select: {
                banner_perfil: true,
                banner_image_type: true
            }
        })
    }

    async countUserPremium() {
        return await prisma.usuario.count({
            where: {
                premium: 1
            }
        })
    }

    async findAllUsersPesquisa(filtroPesquisa) {
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

    async deleteUser(userId) {
        return await prisma.usuario.delete({
            where: {
                id: userId
            }
        })
    }
}

const usuarioModel = new Usuario();

module.exports = usuarioModel;