import { User } from "./models.js";

const logCheck = async (id) => {
    const user = await User.findByPk(id);
    if (user.isLogged) return true;
    return false;
}

export { logCheck };