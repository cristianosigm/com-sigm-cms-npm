export class PasswordReset {

    email: string;
    resetKey: string;
    password: string;
    passwordConfirm: string;

    constructor() {
        this.email = '';
        this.resetKey = '';
        this.password = '';
        this.passwordConfirm = '';
    }

}
