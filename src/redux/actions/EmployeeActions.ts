import API from '../../API';
import Employee from '../../models/Employee';
import { EMPLOYEE_ADD, EMPLOYEE_DELETE, EMPLOYEE_EDIT, EMPLOYEES_SET } from '../ActionTypes';
import { HOST } from '../../Constants';

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

export function actionEditEmployee(editedEmployee: Employee, file?: File) {
    return (dispatch: any) => {
        if (!editedEmployee) { return; }

        let formData = new FormData();
        formData.append('first_name', editedEmployee.firstName);
        formData.append('last_name', editedEmployee.lastName);
        formData.append('description', editedEmployee.description);
        if (editedEmployee.phone) {
            formData.append('phone', editedEmployee.phone.toString());
        }
        formData.append('email', editedEmployee.email);
        formData.append('position', editedEmployee.position);
        formData.append('photo', editedEmployee.photo);
        if (file) {
            formData.append('file', file);
        } 

        fetch(`${HOST}/api/employee/${editedEmployee.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, */*'
            },
            body: formData
        }) 
            .then((res: any) => {
                if (res.status < 400) {
                    return res.json();
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .then((data) => {
                    editedEmployee.photo = data.photo;
                    dispatch({
                        type: EMPLOYEE_EDIT,
                        payload: editedEmployee
                    });
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}

export function actionDeleteEmployee(id: number) {
    return (dispatch: any) => {
        API.delete(`/api/employee/${id}`)
            .then((res: any) => {
                if (res.status < 400) {
                    dispatch({
                        type: EMPLOYEE_DELETE,
                        payload: id
                    });
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}

export function actionAddEmployee(newEmployee: Employee, file?: File) {
    return (dispatch) => {
        let formData = new FormData();
        formData.append('first_name', newEmployee.firstName);
        formData.append('last_name', newEmployee.lastName);
        formData.append('description', newEmployee.description);
        if (newEmployee.phone) {
            formData.append('phone', newEmployee.phone.toString());
        }
        formData.append('email', newEmployee.email);
        formData.append('position', newEmployee.position);
        formData.append('photo', newEmployee.photo);
        if (file) {
            formData.append('file', file);
        } 

        fetch(`${HOST}/api/employee`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, */*'
            },
            body: formData
        }) 
            .then((res: any) => {
                if (res.status < 400) {
                    return res.json();
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .then((data) => {
                let newEmpl = data.employee;
                dispatch({
                    type: EMPLOYEE_ADD,
                    payload: new Employee(newEmpl.id, newEmpl.first_name, newEmpl.last_name, newEmpl.description,
                        newEmpl.phone, newEmpl.email, newEmpl.position, newEmpl.photo)
                });
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}