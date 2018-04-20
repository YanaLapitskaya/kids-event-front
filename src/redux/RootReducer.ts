import { Action, handleActions, ReducerMap } from 'redux-actions';
import { combineReducers, Reducer } from 'redux';
import { EMPLOYEE_ADD, EMPLOYEE_DELETE, EMPLOYEE_EDIT, EMPLOYEES_SET, REVIEWS_SET, SERVICES_SET, CLIENTS_GET, CLIENT_EDIT, CLIENT_ADD, CLIENT_DELETE, ORDERS_GET, ORDER_EDIT, SERVICE_ADD, SERVICE_EDIT, SERVICE_DELETE } from './ActionTypes';
import Employee from '../models/Employee';
import { AppState, getInitialState } from './AppState';
import Review from '../models/Review';
import Service from '../models/Service';
import Client from '../models/Client';
import Order from '../models/Order';

type EmployeeState = Employee[];
type EmployeePayload = Employee;
const initialEmployeesState = getInitialState().employees;
const EmployeeReducer = handleActions<EmployeeState, EmployeePayload>({
    [EMPLOYEES_SET]: (state: EmployeeState, action: Action<EmployeePayload[]>): EmployeeState => {
        return [...action.payload || []];
    },
    [EMPLOYEE_ADD]: (state: EmployeeState, action: Action<EmployeePayload>): EmployeeState => {
        let nextState = state;
        if (action.payload) {
            nextState = [...state, action.payload];
        }
        return nextState;
    },
    [EMPLOYEE_EDIT]: (state: EmployeeState, action: Action<EmployeePayload>): EmployeeState => {
        let nextState = state;
        if (action.payload) {
            let empl = action.payload;
            let id = empl.id;
            nextState = state.map((el) => {
                return el.id === id ? empl : el;
            });
        }
        return nextState;
    },
    [EMPLOYEE_DELETE]: (state: EmployeeState, action: Action<number>): EmployeeState => {
        let nextState = state;
        if (action.payload) {
            nextState = nextState.filter((el) => el.id !== action.payload);
        }
        return nextState;
    }
} as ReducerMap<EmployeeState, EmployeePayload>, initialEmployeesState);

type ReviewState = Review[];
type ReviewPayload = Review;
const initialReviewsState = getInitialState().reviews;
const ReviewsReducer = handleActions<ReviewState, ReviewPayload>({
    [REVIEWS_SET]: (state: ReviewState, action: Action<ReviewPayload[]>): ReviewState => {
        return [...action.payload || []];
    }
} as ReducerMap<ReviewState, ReviewPayload>, initialReviewsState);

type ServiceState = Service[];
type ServicePayload = Service;
const initialServicesState = getInitialState().services;
const ServicesReducer = handleActions<ServiceState, ServicePayload>({
    [SERVICES_SET]: (state: ServiceState, action: Action<ServicePayload[]>): ServiceState => {
        return [...action.payload || []];
    },
    [SERVICE_ADD]: (state: ServiceState, action: Action<ServicePayload>): ServiceState => {
        let nextState = state;
        if (action.payload) {
            nextState = [...state, action.payload];
        }
        return nextState;
    },
    [SERVICE_EDIT]: (state: ServiceState, action: Action<ServicePayload>): ServiceState => {
        let nextState = state;
        if (action.payload) {
            let service = action.payload;
            let id = service.id;
            nextState = state.map((el) => {
                return el.id === id ? service : el;
            });
        }
        return nextState;
    },
    [SERVICE_DELETE]: (state: ServiceState, action: Action<number>): ServiceState => {
        let nextState = state;
        if (action.payload) {
            nextState = nextState.filter((el) => el.id !== action.payload);
        }
        return nextState;
    }
} as ReducerMap<ServiceState, ServicePayload>, initialServicesState);

type ClientState = Client[];
type ClientPayload = Client;
const initialClientsState = getInitialState().clients;
const ClientReducer = handleActions<ClientState, ClientPayload>({
    [CLIENTS_GET]: (state: ClientState, action: Action<ClientPayload[]>): ClientState => {
        return [...action.payload || []];
    },
    [CLIENT_ADD]: (state: ClientState, action: Action<ClientPayload>): ClientState => {
        let nextState = state;
        if (action.payload) {
            nextState = [...state, action.payload];
        }
        return nextState;
    },
    [CLIENT_EDIT]: (state: ClientState, action: Action<ClientPayload>): ClientState => {
        let nextState = state;
        if (action.payload) {
            let client = action.payload;
            let id = client.id;
            nextState = state.map((el) => {
                return el.id === id ? client : el;
            });
        }
        return nextState;
    },
    [CLIENT_DELETE]: (state: ClientState, action: Action<number>): ClientState => {
        let nextState = state;
        if (action.payload) {
            nextState = nextState.filter((cl) => cl.id !== action.payload);
        }
        return nextState;
    }
} as ReducerMap<ClientState, ClientPayload>, initialClientsState);

type OrderState = Order[];
type OrderPayload = Order;
const initialOrdersState = getInitialState().orders;
const OrdersReducer = handleActions<OrderState, OrderPayload>({
    [ORDERS_GET]: (state: OrderState, action: Action<OrderPayload[]>): OrderState => {
        return [...action.payload || []];
    },
    [ORDER_EDIT]: (state: OrderState, action: Action<OrderPayload>): OrderState => {
        let nextState = state;
        if (action.payload) {
            let order = action.payload;
            let id = order.id;
            nextState = state.map((ord) => {
                return ord.id === id ? order : ord;
            });
        }
        return nextState;
    },
} as ReducerMap<OrderState, OrderPayload>, initialOrdersState);

const rootReducer: Reducer<AppState> = combineReducers( {
    employees: EmployeeReducer,
    reviews: ReviewsReducer,
    services: ServicesReducer,
    clients: ClientReducer,
    orders: OrdersReducer
});

export default rootReducer;