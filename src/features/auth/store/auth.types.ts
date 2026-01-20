
export interface User {
    id: string; name: string; email: string
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
    user: User;
    token: string
}