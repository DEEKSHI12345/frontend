import { environment } from "src/environments/environment";

export const UserAPI = {
    

    get(size:number,number:number): string {
        return `${environment.apiBaseUrl}/api/Employee/${size}/${number}`;
    }
}