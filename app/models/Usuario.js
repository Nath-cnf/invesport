const prisma = require("../../server/database/prismaClient");

class Usuario {
    async createUsuario(data) {
        console.log("dentro model")
        await prisma.usuario.create({
            data
        })
    }

    async findUserById(usuarioId) {
        return await prisma.usuario.findUnique({
            where: {
                id: usuarioId
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
}

const usuarioModel = new Usuario();

module.exports = usuarioModel;