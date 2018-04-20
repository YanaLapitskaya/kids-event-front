export default class Service {
    id: number;
    photos: Array<string>;
    title: string;
    description: string;
    price: number;

    constructor(id: number = null, photos: Array<string> = [], title: string = '', description: string = '', price: number = null) {
        this.id = id;
        this.photos = photos;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}