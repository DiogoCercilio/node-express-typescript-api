class UserService {
    userIsAdult(user) {
        if(parseInt(user.age) < 18) {
            throw "Verifique se a idade informada está correta, e é maior que 18.";
        } 
        return true;
    }

    userIsHuman(user) {
        if(user.type != "human") {
            throw "Cadastro permitido somente para humanos.";
        } 
        return true;
    }
}

export default UserService;