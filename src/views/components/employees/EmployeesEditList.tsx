import * as React from 'react';
import { HOST } from '../../../Constants';
import { List, ListItem } from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import Employee from '../../../models/Employee';
import TextField from 'material-ui/TextField';
import SideMenu from '../../partials/SideMenu';
import { css } from 'glamor';
import Divider from 'material-ui/Divider';
import BaseLayout from '../../pages/BaseLayout';

interface EmployeesState {
    open: boolean;
    employee: Employee;
    file: File | any;
}

class EmployeesEditList extends React.Component<any, EmployeesState> {
    state = {
        open: false,
        employee: new Employee(),
        file: undefined
    };

    image: HTMLInputElement = undefined;    

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
        } else {
            this.setState({
                open: true
            });
        }
    }

    handleClose = (e) => {
        if (e.target.innerText === 'СОХРАНИТЬ') {
            if (!this.state.employee.id) {
                this.props.addEmployee(this.state.employee, this.state.file);
            } else {
                this.props.editEmployee(this.state.employee, this.state.file);
            }
        } else if (e.target.innerText === 'УДАЛИТЬ СОТРУДНИКА') {
            this.props.deleteEmployee(this.state.employee.id);
        }

        this.setState({
            open: false,
            employee: new Employee(),
            file: undefined
        });
    }

    handleHoverPhoto(e: any) {
        if (e.currentTarget.childNodes.length === 2) {
            e.currentTarget.childNodes[1].className = 'shown';
        }
    }

    handleLeavePhoto(e: any) {
        if (e.currentTarget.childNodes.length === 2) {
            e.currentTarget.childNodes[1].className = 'hidden';
        }
    }

    handleImageChange(files: FileList | null) {
        if (files) {
            this.setState({
                file: files[0]
            });
            let reader = new FileReader();

            reader.onload = () => {
                this.image.style.display = 'block';
                this.image.src =  reader.result;
            };
            reader.readAsDataURL(files[0]);
        }
    }
    
    handleImageError() { 
        this.image.style.display = 'none';
    }

    render() {
        const actions = [
            (
                <FlatButton
                    label="Удалить сотрудника"
                    key="delete"
                    secondary={true}
                    style={styles.deleteButton}
                    onClick={(e) => this.handleClose(e)}
                />
            ),
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
            <BaseLayout {...this.props}>
                <div {...sectionStyles}>
                    <List>
                        {this.props.employees.map((empl, ind) => {
                            return(
                                <div key={ind}>
                                    <ListItem
                                        primaryText={`${empl.firstName} ${empl.lastName}`}
                                        leftAvatar={<Avatar src={`${HOST}${empl.photo}`} />}
                                        onClick={() => this.handleOpen(empl)}
                                    />
                                    <Divider />
                                </div>
                            );
                        })}
                    </List>
                    <FloatingActionButton style={styles.addEmployeeButton} secondary={true} onClick={() => this.handleOpen()}>
                        <ContentAdd />
                    </FloatingActionButton>

                    <Dialog
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        autoScrollBodyContent={true}
                    >
                        <div {...grid}>
                            <label>
                                <div
                                    onMouseLeave={(e) => this.handleLeavePhoto(e)}
                                    onMouseEnter={(e) => this.handleHoverPhoto(e)}
                                >
                                    <img {...photo}
                                        src={`${HOST}${this.state.employee.photo}`}
                                        ref={(node: any) => { this.image = node; }}
                                        onError={() => this.handleImageError()}
                                    />
                                    <div {...photoArea} className={this.state.employee.photo ? 'hidden' : ''}>
                                            Выберите фотографию<br/>
                                            <img {...addPhotoIcon} src={process.env.PUBLIC_URL + '/images/add-photo.svg'} />
                                    </div>
                                </div>
                                <input {...input} type="file" onChange={(e) => {this.handleImageChange(e.target.files); }}/>
                            </label>
                            <div>
                                <div className="firstLastName">
                                    <TextField floatingLabelText="Имя"
                                            defaultValue={this.state.employee.firstName}
                                            style={styles.firstName}
                                            id="firstName" onChange={(e, v) => this.handleChange(e, v)}/><br />
                                    <TextField floatingLabelText="Фамилия"
                                            defaultValue={this.state.employee.lastName}
                                            style={styles.lastName}
                                            id="lastName" onChange={(e, v) => this.handleChange(e, v)}/><br />
                                </div>
                                <TextField floatingLabelText="Должность"
                                        defaultValue={this.state.employee.position}
                                        style={styles.bigInput}
                                        id="position" onChange={(e, v) => this.handleChange(e, v)}/><br />
                                <TextField floatingLabelText="Телефон"
                                        defaultValue={this.state.employee.phone}
                                        style={styles.bigInput}
                                        id="phone" onChange={(e, v) => this.handleChange(e, v)}/><br />
                                <TextField floatingLabelText="Email"
                                        defaultValue={this.state.employee.email}
                                        style={styles.bigInput}
                                        id="email" onChange={(e, v) => this.handleChange(e, v)}/><br />
                                <TextField floatingLabelText="About employee"
                                        defaultValue={this.state.employee.description}
                                        style={styles.bigInput}
                                        multiLine={true}
                                        rows={2}
                                        id="description" onChange={(e, v) => this.handleChange(e, v)}/><br />
                            </div>
                        </div>
                    </Dialog>
                </div>
            </BaseLayout>
        );
    }
}

const styles = {
    firstName: {
        marginRight: '1vw',
        width: '13vw'
    },
    lastName: {
        width: '13vw'
    },
    bigInput: {
        width: '27vw'
    },
    deleteButton: {
        position: 'absolute',
        left: '0'
    },
    addPhotoIcon: {
        color: '#616161',
        margin: '10px'
    },
    addEmployeeButton: {
        position: 'absolute',
        marginTop: '50px',
        right: '250px'
    }
};

const addPhotoIcon = css({
    width: '30px',
    height: '30px',
    marginLeft: '10px'
});

const input = css({
    display: 'none'
});

const photo = css({
    width: '300px',
    margin: '0px 30px 0px 0px',
    position: 'absolute',
    zIndex: '1'
});

const photoArea = css({
    width: '300px',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    border: '1px solid black',
    marginRight: '30px',
    position: 'relative',
    color: 'black',
    opacity: '0.6',
    fontWidth: '900',
    zIndex: 2,
    '.hidden': {
        zIndex: '0'
    }
});

const grid = css({
    display: 'flex',
    alignItems: 'flex-start',
    ' .firstLastName': {
        display: 'flex'
    }
});

const sectionStyles = css({
    width: '50vw'
});

export default EmployeesEditList;
