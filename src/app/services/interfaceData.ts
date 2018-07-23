export namespace dataStructure {
    export interface UserDetails {
        _id: string;
        email: string;
        name: string;
        exp: number;
        iat: number;
    }
    export interface tokenResponse {
        token: string;
    }
    export interface TokenPayload {
        email: string;
        password: string;
        name?: string;
    }
}