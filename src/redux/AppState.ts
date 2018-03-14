import Employee from '../models/Employee';
import Review from '../models/Review';
import Service from '../models/Service';

export interface AppState {
    employees: Array<Employee>;
    reviews: Array<Review>;
    services: Array<Service>;
}
const employees: Array<Employee> = [];
const reviews: Array<Review> = [];
const services: Array<Service> = [];

export const getInitialState = (): AppState => {
    return {employees, reviews, services};
};