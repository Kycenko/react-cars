import axios from "axios";

export const CarService = {
  async getAll() {
    const response = await axios.get('https://6364a48f7b209ece0f4a59ab.mockapi.io/cars')
    return response.data
  }

}