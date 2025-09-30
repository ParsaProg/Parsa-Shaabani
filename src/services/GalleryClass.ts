export default class ApiService {
  private apiURl: string;
  private token: string;
  constructor(apiURl: string, token: string) {
    this.apiURl = apiURl;
    this.token = token;
  }

  async getData() {
    const response = await fetch(this.apiURl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Can fetch data from api");
    }

    return response.json();
  }

  async putData(body: any) {
    const userPutResponse = await fetch(`${this.apiURl}`, {
      method: "PUT",
      body: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    if (!userPutResponse.ok) {
      throw new Error("Can't put user");
    }
    return userPutResponse.json();
  }

  async postData(body: any) {
    const postResponse = await fetch(this.apiURl, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    });
    if (!postResponse.ok) {
      throw new Error("Can't post user");
    }
    return postResponse.json();
  }
}
