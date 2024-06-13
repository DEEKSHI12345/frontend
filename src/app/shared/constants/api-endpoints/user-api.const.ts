import { environment } from "src/environments/environment";

export const UserAPI = {
    

    get(): string {
        
        return `${environment.apiBaseUrl}/api/Employee`;
    }
}