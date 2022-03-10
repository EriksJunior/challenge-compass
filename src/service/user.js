import { http } from "../config/axios";

class UsersFetch {
  async getUser(nameUser) {
    const { data } = await http.get(`/${nameUser}`);
    return data;
  }
}

export default new UsersFetch();
