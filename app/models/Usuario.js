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

    async updateUser(data, userId) {
        await prisma.usuario.update({
            where: {
                id: userId
            },
            data
        })
    }

    async getUserImage(userId) {
        return await prisma.usuario.findUnique({
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
        return await prisma.usuario.findUnique({
            where: {
                id: userId
            },
            /*select: {
                banner_perfil,
                banner_image_type
            }*/
        })
    }
}

const usuarioModel = new Usuario();

module.exports = usuarioModel;