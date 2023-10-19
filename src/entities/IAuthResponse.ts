import { Role } from "./Role";

export interface IAuthResponse {
    id: number;
    username: string;
    role: Role;
}