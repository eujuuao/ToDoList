import UserModel from '../models/user.model'

class UserService{
   public async insertUser(name: string, email:string, age: string) {
    try {
        return await UserModel.insertUser(name, email, age)
    } catch (error) {
        console.log("erro-->", error)
        throw error; 
    }
   }
}

export default new UserService();