import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient ();

class UserModel {
    public async insertUser(name: string, email: string, age: string): Promise<any> {
        try {
            return await prisma.user.create({
                data: { name, email, age }
            })
        } catch (error) {
            console.error("Erro ao inserir usuario -->", error)
            throw error
        }
    }

    
}

export default new UserModel();