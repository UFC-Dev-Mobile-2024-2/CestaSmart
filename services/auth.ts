import api from "./api";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
  try {
    const response = await api.post<LoginResponse>("/login", credentials);
    return response.data;
  } catch (error: any) {
    console.error("Erro no login:", error.response?.data || error.message);
    throw error;
  }
};
