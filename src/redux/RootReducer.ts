import { Action, handleActions, ReducerMap } from 'redux-actions';
import { combineReducers, Reducer } from 'redux';
import { EMPLOYEES_SET, REVIEWS_SET, SERVICES_SET } from './ActionTypes';
import Employee from '../models/Employee';
import { AppState, getInitialState } from './AppState';
import Review from '../models/Review';
import Service from '../models/Service';

type EmployeeState = Employee[];
type EmployeePayload = Employee;
const initialEmployeesState = getInitialState().employees;
const EmployeeReducer = handleActions<EmployeeState, EmployeePayload>({
    [EMPLOYEES_SET]: (state: EmployeeState, action: Action<EmployeePayload[]>): EmployeeState => {
        return [...action.payload || []];
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
    }
} as ReducerMap<ServiceState, ServicePayload>, initialServicesState);

const rootReducer: Reducer<AppState> = combineReducers( {
    employees: EmployeeReducer,
    reviews: ReviewsReducer,
    services: ServicesReducer
});

export default rootReducer;