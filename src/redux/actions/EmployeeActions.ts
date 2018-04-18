import API from '../../API';
import Employee from '../../models/Employee';
import { EMPLOYEE_ADD, EMPLOYEE_DELETE, EMPLOYEE_EDIT, EMPLOYEES_SET } from '../ActionTypes';

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

export function actionEditEmployee(editedEmployee: Employee) {
    return (dispatch: any) => {
        if (!editedEmployee) { return; }

        /*let formData = new FormData();
        formData.append('firstName', editedEmployee.firstName);
        formData.append('lastName', editedEmployee.lastName);
        formData.append('position', editedEmployee.position);
        formData.append('email', editedEmployee.email);
        if (editedEmployee.phone) {
            formData.append('phone', editedEmployee.phone.toString());
        }
        formData.append('description', editedEmployee.description);*/

        let emplData = {
            first_name: editedEmployee.firstName,
            last_name: editedEmployee.lastName,
            position: editedEmployee.position,
            email: editedEmployee.email,
            phone: editedEmployee.phone,
            description: editedEmployee.description
        };

     /*   fetch(`${HOST}/api/employee/${editedEmployee.id}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, *!/!*'
            },
            body: data
        })*/
        API.post(`/api/employee/${editedEmployee.id}`, emplData)
            .then((res: any) => {
                if (res.status < 400) {
                    let emp = editedEmployee;
                    emp = new Employee(emp.id, emp.firstName, emp.lastName, emp.description, emp.phone,
                        emp.email, emp.position, emp.photo);
                    dispatch({
                        type: EMPLOYEE_EDIT,
                        payload: emp
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

export function actionAddEmployee(newEmployee: Employee) {
    return (dispatch) => {
        let reqEmployee = {
            first_name: newEmployee.firstName,
            last_name: newEmployee.lastName,
            description: newEmployee.description,
            phone: newEmployee.phone,
            email: newEmployee.email,
            position: newEmployee.position,
            photo: newEmployee.photo
        };
        API.put('/api/employee', reqEmployee)
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