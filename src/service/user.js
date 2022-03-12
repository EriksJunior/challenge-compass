import { http } from "../config/axios";

class UsersFetch {
  async getUser(nameUser, bearerToken) {
    const { data } = await http.get(`/${nameUser}`, {
      access_token: `${bearerToken}`,
    });
    return data;
  }
}

export default new UsersFetch();
