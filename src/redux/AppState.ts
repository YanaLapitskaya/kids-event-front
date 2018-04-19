import Employee from '../models/Employee';
import Review from '../models/Review';
import Service from '../models/Service';
import Client from '../models/Client';

export interface AppState {
    employees: Array<Employee>;
    reviews: Array<Review>;
    services: Array<Service>;
    clients: Array<Client>;
}
const employees: Array<Employee> = [];
const reviews: Array<Review> = [];
const services: Array<Service> = [];
const clients: Array<Client> = [];

export const getInitialState = (): AppState => {
    return {employees, reviews, services, clients};
};