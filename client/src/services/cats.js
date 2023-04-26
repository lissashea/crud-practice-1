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
