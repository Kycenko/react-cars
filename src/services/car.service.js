import axios from "axios";

export const CarService = {
  async getAll(currentPage) {
    const response = await axios.get(
      `http://localhost:4200/cars?_page=${currentPage}&_limit=6`
    );
    return response.data;
  },
  async getById(id) {
    const response = await axios.get(`http://localhost:4200/cars?id=${id}`);
    return response.data[0];
  },
};
