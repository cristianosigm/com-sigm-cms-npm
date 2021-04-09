export class User {

    id!: number;
    idRole: number;
    approved: boolean;
    blocked: boolean;
    changePassword: boolean;
    currentPassword: string;
    displayName: string;
    email: string;
    failedAttempts: number;
    name: string;
    password: string;
    passwordConfirm: string;
    roleName: string;
    username: string;
    validated: boolean;

    authdata!: string;

    constructor() {
        this.idRole = 1;
        this.approved = false;
        this.blocked = false;
        this.changePassword = false;
        this.currentPassword = '';
        this.displayName = '';
        this.email = '';
        this.failedAttempts = 0;
        this.name = '';
        this.password = '';
        this.passwordConfirm = '';
        this.roleName = '';
        this.username = '';
        this.validated = false;
    }
}
