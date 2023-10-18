const prisma = require("../../server/database/prismaClient");

class BeneficiosAssinatura {
    async createBeneficioAssinatura(data) {
        return await prisma.beneficiosAssinatura.create({
            data
        });
    }

    async findBeneficioAssinaturaById(beneficiosAssinaturaId) {
        return await prisma.beneficiosAssinatura.findUnique({
            where: {
                id: beneficiosAssinaturaId
            }
        })
    }

    async findAllBeneficiosAssinatura() {
        return await prisma.beneficiosAssinatura.findMany({
            orderBy: {
                created_at: "desc"
            }
        });
    }

    async updateBeneficioAssinatura(data, beneficiosAssinaturaId) {
        return await prisma.beneficiosAssinatura.update({
            where: {
                id: beneficiosAssinaturaId
            },
            data
        })
    }

    async deleteBeneficioAssinatura(beneficioAssinaturaId) {
        return await prisma.beneficiosAssinatura.delete({
            where: {
                id: beneficioAssinaturaId
            }
        })
    }
}

const beneficiosAssinaturaModel = new BeneficiosAssinatura();

module.exports = beneficiosAssinaturaModel;