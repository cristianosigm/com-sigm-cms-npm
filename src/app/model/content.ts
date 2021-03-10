export class Content {

    id!: number;
    idPicture: number;
    title: string;
    content: string;

    constructor() {
        this.idPicture = 0;
        this.title = '';
        this.content = '';
    }
}
