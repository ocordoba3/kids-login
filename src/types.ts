export interface Item {
    id: string,
    name: string,
    color: string,
    icon: string
}

export interface User {
    name: string,
    password: string[]
}

export class Response {
    isValid: boolean;
    message: string;

    constructor(isValid: boolean, message: string) {
        this.isValid = isValid;
        this.message = message;
    }
}