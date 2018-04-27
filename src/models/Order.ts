import Service from './Service';

export default class Order {
    id: number;
    dateOrder: Date;
    dateService: Date;
    price: string;
    comments: string;
    client_id: number;
    Services: Array<Service>;
    status: string;

    constructor(id: number = null, dateOrder: Date = null, dateService: Date = null, price: string = '', comments: string = '', 
            client_id: number = null, Services: Array<Service> = [], status: string = '') {
        this.id = id;
        this.dateOrder = dateOrder;
        this.dateService = dateService;
        this.price = price;
        this.comments = comments;
        this.client_id = client_id;
        this.Services = Services;
        this.status = status;
    }
}