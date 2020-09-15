import axios from "axios";

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  const response = await axios.get(API_ENDPOINT);
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(`${API_ENDPOINT}/${id}`);
  return response.data;
}
