
export interface DashboardRequest { };
export interface DashboardResponse { };


export interface DashboardState {
    loading: boolean;
    data: DashboardResponse | null;
    error: string | null;
}