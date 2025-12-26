
export interface User {
    id: string; name: string; email: string, token: string
}
export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}