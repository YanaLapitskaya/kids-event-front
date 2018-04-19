export default class Order {
    id: number;
    date: string;
    price: string;
    comments: string;
    client_id: number;
    Services: Array<number>;

    constructor(id: number = null, date: string = '', price: string = '', comments: string = '', client_id: number = null, Services: Array<number> = []) {
        this.id = id;
        this.date = date;
        this.price = price;
        this.comments = comments;
        this.client_id = client_id;
        this.Services = Services;
    }
}