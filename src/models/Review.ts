export default class Review {
    id: number;
    name: string;
    text: string;
    photo: string;

    constructor(id: number, name: string, text: string, photo: string) {
        this.id = id;
        this.name = name;
        this.text = text;
        this.photo = photo;
    }
}