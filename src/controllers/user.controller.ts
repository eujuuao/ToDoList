import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
    public async insertUser (req: Request, res: Response): Promise<Response> {
        try {
            const {name, email, age} = req.body;
            await UserService.insertUser(name, email, age);
            return res.status(201).json({message: "Usuario criado com sucesso!"});
        } catch (error) {
            console.error("Erro no controlador-->", error);
            return res.status(400).json({error:"Erro ao criar usuario!"});
        }

    }
}

export default new UserController();