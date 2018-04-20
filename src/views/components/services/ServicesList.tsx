import * as React from 'react';
import SideMenu from '../../partials/SideMenu';
import ServiceCard from './ServiceCard';
import Service from '../../../models/Service';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

interface ServiceState {
    service: Service;
    open: boolean;
}

class ServicesList extends React.Component<any, ServiceState> {
    state = {
        service: new Service(),
        open: false
    };

    componentWillMount() {
        this.props.fetchServices();
    }
    
    handleChange = (event, newValue) => {
        let service = this.state.service;
        service[event.target.id] = newValue;
        this.setState({
            service: service
        });
    }

    handleOpen = (service?: Service) => {
        if (service) {
            this.setState({
                service: service,
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
            if (!this.state.service.id) {
                this.props.addService(this.state.service);
            } else {
                this.props.editService(this.state.service);
            }
        } else if (e.target.innerText === 'УДАЛИТЬ УСЛУГУ') {
            this.props.deleteService(this.state.service.id);
        }

        this.setState({
            open: false,
            service: new Service()
        });
    }

    render() {
        const actions = [
            (
                <FlatButton
                    label="Удалить услугу"
                    key="delete"
                    primary={true}
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
        return (
            <div>
                <SideMenu/>
                <div>
                    { 
                        this.props.services.map((service: Service, ind: number) => {
                             return <ServiceCard services={this.props.services} handleOpen={this.handleOpen} service={service} key={ind} />;
                        })
                    }
                </div>
                <FloatingActionButton onClick={() => this.handleOpen()}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    /*title="Dialog With Actions"*/
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <div>
                        <TextField floatingLabelText="Название"
                                defaultValue={this.state.service.title}
                                id="title" onChange={(e, v) => this.handleChange(e, v)}/><br />
                        <TextField floatingLabelText="Описание"
                                defaultValue={this.state.service.description}
                                id="description" onChange={(e, v) => this.handleChange(e, v)}/><br />
                        <TextField floatingLabelText="Цена"
                                defaultValue={this.state.service.price}
                                id="price" onChange={(e, v) => this.handleChange(e, v)}/><br />
                    </div>
                </Dialog>
            </div>
        );
    }
}

export default ServicesList;