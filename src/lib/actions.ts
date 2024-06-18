import axios from "axios";

const API_KEY = "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";

const instance = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const createEmbedding = async (input: string) => {
  try {
    console.log("Creating embedding for input:", input);
    const response = await instance.post("/embeddings", {
      model: "text-embedding-ada-002",
      input,
    });
    console.log("Embedding response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating embedding:", error);
    throw error;
  }
};
