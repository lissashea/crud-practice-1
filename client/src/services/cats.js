import api from "./apiConfig.js";

export const getCats = async () => {
  try {
    const response = await api.get("/cats");
    return response.data;
  } catch (error) {
    console.error(`Failed to get cats - error: ${error}`);
    throw error;
  }
};

export const getCat = async (id) => {
  try {
    const response = await api.get(`/cats/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get cat - error: ${error}`);
    throw error;
  }
};

export const createCat = async (catData) => {
  try {
    const response = await api.post("/cats", catData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
