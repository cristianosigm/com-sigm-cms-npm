export class User {

    id!: number;
    idRole: number;
    approved: boolean;
    blocked: boolean;
    displayName: string;
    email: string;
    failedAttempts: number;
    name: string;
    password: string;
    passwordConfirm: string;
    username: string;
    validated: boolean;

    authdata!: string;

    constructor() {
        this.idRole = 0;
        this.approved = false;
        this.blocked = false;
        this.displayName = '';
        this.email = '';
        this.failedAttempts = 0;
        this.name = '';
        this.password = '';
        this.passwordConfirm = '';
        this.username = '';
        this.validated = false;
    }
}
