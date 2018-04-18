import * as React from 'react';
import { HOST } from '../../../Constants';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Avatar from 'material-ui/Avatar';
import { pinkA200, transparent } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Employee from '../../../models/Employee';
import TextField from 'material-ui/TextField';

interface EmployeesState {
    open: boolean;
    employee: Employee;
}

class EmployeesEditList extends React.Component<any, EmployeesState> {
    state = {
        open: false,
        employee: new Employee(0, '', '', '', null, '', '', '')
    };

    componentWillMount() {
        this.props.fetchEmployees();
    }

    handleChange = (event, newValue) => {
        let empl = this.state.employee;
        empl[event.target.id] = newValue;
        this.setState({
            employee: empl
        });
    }

    handleOpen = (empl?: Employee) => {
        if (empl) {
            this.setState({
                employee: empl,
                open: true
            });
        }
        this.setState({
            open: true
        });
    }

    handleClose = (e) => {
        if (e.target.innerText === 'СОХРАНИТЬ') {
            if (!this.state.employee.id) {
                this.props.addEmployee(this.state.employee);
            } else {
                this.props.editEmployee(this.state.employee);
            }
        }

        this.setState({
            open: false,
            employee: new Employee(0, '', '', '', null, '', '', '')
        });
    }

    render() {
        const actions = [
            (
                <FlatButton
                    label="Отмена"
                    key="cancel"
                    primary={true}
                    onClick={(e) => this.handleClose(e)}
                />
            ),
            (
                <FlatButton
                    label="Сохранить"
                    key="ok"
                    primary={true}
                    onClick={(e) => this.handleClose(e)}
                />
            )
        ];
        return(
            <section>
                <div>
                    <List>
                        {this.props.employees.map((empl, ind) => {
                            return(
                                <div key={ind}>
                                    <ListItem
                                        primaryText={`${empl.firstName} ${empl.lastName}`}
                                        leftAvatar={<Avatar src={`${HOST}${empl.photo}`} />}
                                        onClick={() => this.handleOpen(empl)}
                                    />
                                </div>
                            );
                        })}
                    </List>
                    <FloatingActionButton secondary={true} onClick={() => this.handleOpen()}>
                        <ContentAdd />
                    </FloatingActionButton>
                    <Dialog
                        /*title="Dialog With Actions"*/
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                    >
                        <div>
                            <TextField floatingLabelText="Имя"
                                       defaultValue={this.state.employee ? this.state.employee.firstName : ''}
                                       id="firstName" onChange={(e, v) => this.handleChange(e, v)}/><br />
                            <TextField floatingLabelText="Фамилия"
                                       defaultValue={this.state.employee ? this.state.employee.lastName : ''}
                                       id="lastName" onChange={(e, v) => this.handleChange(e, v)}/><br />
                            <TextField floatingLabelText="Должность"
                                       defaultValue={this.state.employee ? this.state.employee.position : ''}
                                       id="position" onChange={(e, v) => this.handleChange(e, v)}/><br />
                            <TextField floatingLabelText="Телефон"
                                       defaultValue={this.state.employee ? this.state.employee.phone : ''}
                                       id="phone" onChange={(e, v) => this.handleChange(e, v)}/><br />
                            <TextField floatingLabelText="Email"
                                       defaultValue={this.state.employee ? this.state.employee.email : ''}
                                       id="email" onChange={(e, v) => this.handleChange(e, v)}/><br />
                            <TextField floatingLabelText="About employee"
                                       defaultValue={this.state.employee ? this.state.employee.description : ''}
                                       id="description" onChange={(e, v) => this.handleChange(e, v)}/><br />
                        </div>
                    </Dialog>
                </div>
            </section>
        );
    }
}

export default EmployeesEditList;
