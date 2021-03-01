export class User {
    id: number;
    idRole: number;
    approved: boolean;
    blocked: boolean;
    dateApproval: Date;
    dateBlocked: Date;
    dateLastLogin: Date;
    dateValidation: Date;
    displayName: string;
    email: string;
    failedAttempts: number;
    name: string;
    password: string;
    confirmPassword: string;
    username: string;
    validated: boolean;

    constructor() {
        this.idRole = 0;
        this.approved = false;
        this.blocked = false;
        this.failedAttempts = 0;
        this.validated = false;
    }
}
