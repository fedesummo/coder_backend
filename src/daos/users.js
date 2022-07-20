import MongodbContainer from "../containers/mongo.js";
import usersModel from "../models/Users.js"

class UsersDao extends MongodbContainer {
    constructor() {
        super(usersModel)
    }
}

export const UsersCollecion = new UsersDao();