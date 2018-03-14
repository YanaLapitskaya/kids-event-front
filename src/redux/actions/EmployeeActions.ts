import API from '../../API';
import Employee from '../../models/Employee';
import { EMPLOYEES_SET } from '../ActionTypes';

export function actionFetchEmployees() {
    return (dispatch: any) => {
        API.get('/api/employee/all').then((data: any) => {
            let employees = data.employees;
            employees = employees.map((empl: any) => {
                return new Employee(empl.id, empl.first_name, empl.last_name, empl.description, empl.phone,
                    empl.email, empl.position, empl.photo);
            });
            dispatch({
                type: EMPLOYEES_SET,
                payload: employees
            });
        });
    };
}