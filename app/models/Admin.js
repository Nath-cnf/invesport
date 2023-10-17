const prisma = require("../../server/database/prismaClient");

class Admin {
    async createUsuario(data) {
        await prisma.admin.create({
            data
        });
    }

    async findUserById(usuarioId) {
        return await prisma.admin.findUnique({
            where: {
                id: usuarioId
            },
            include: {
                esporte: true
            }
        })
    }

    async findUserByEmail(usuarioEmail) {
        return await prisma.admin.findUnique({
            where: {
                email: usuarioEmail
            }
        })
    }
}

const adminModel = new Admin();

module.exports = adminModel;