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
}
