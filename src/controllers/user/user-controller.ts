import { UserControllerInterface } from "./user-controller-interface";
import { UserPostData } from "../../service/user/user-service-interface";
import UserService   from "../../service/user/user-service";

class UserController {
    public index(req, res) {
        res.json({ message: "get user"});
    }

    // Adiciona novo usuário (user/add)
    public add(req, res) {
        let msg: string;
        let userService = new UserService();
        let mockUserPostData: UserPostData = { name: "Diogo", age: 30, type: "human" /* \o/ */ };

        try {
            userService.userIsAdult(mockUserPostData);
            userService.userIsHuman(mockUserPostData);

            res.json({ msg: "Usuário cadastrado com sucesso." });
        } catch(e) {
            res.json({ msg: e });
        }
    }

    // Remove usuário (user/delete)
    public delete(req, res) {
        res.json({msg: "Deletando..."});
    }
}

export default new UserController();