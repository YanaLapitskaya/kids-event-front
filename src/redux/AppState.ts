import Employee from '../models/Employee';
import Review from '../models/Review';
import Service from '../models/Service';
import Client from '../models/Client';
import Order from '../models/Order';

export interface AppState {
    employees: Array<Employee>;
    reviews: Array<Review>;
    services: Array<Service>;
    clients: Array<Client>;
    orders: Array<Order>;
}
const employees: Array<Employee> = [];
const reviews: Array<Review> = [];
const services: Array<Service> = [];
const clients: Array<Client> = [];
const orders: Array<Order> = [];

export const getInitialState = (): AppState => {
    return {employees, reviews, services, clients, orders};
};