import * as React from 'react';
import SideMenu from '../../partials/SideMenu';
import ServiceCard from './ServiceCard';
import Service from '../../../models/Service';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { css } from 'glamor';
import { HOST } from '../../../Constants';

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
                    style={styles.deleteButton}
                    secondary={true}
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
                <SideMenu {...this.props}/>
                <div {...wrapper}>
                    { 
                        this.props.services.map((service: Service, ind: number) => {
                             return <ServiceCard services={this.props.services} handleOpen={this.handleOpen} service={service} key={ind} />;
                        })
                    }
                </div>
                <FloatingActionButton style={{margin: '0px 50px'}} onClick={() => this.handleOpen()}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <div>
                        <TextField 
                            floatingLabelText="Название"
                            style={styles.textField}
                            defaultValue={this.state.service.title}
                            id="title" onChange={(e, v) => this.handleChange(e, v)}
                        /><br />
                        <TextField
                            floatingLabelText="Описание"
                            style={styles.textField}
                            defaultValue={this.state.service.description}
                            multiLine={true}
                            rows={3}
                            rowsMax={5}
                            id="description" onChange={(e, v) => this.handleChange(e, v)}
                        /><br />
                        <TextField 
                            floatingLabelText="Цена"
                            style={styles.textField}
                            defaultValue={this.state.service.price}
                            id="price" onChange={(e, v) => this.handleChange(e, v)}
                        /><br />
                    </div>
                    <div>
                    { 
                        this.state.service.photos.map((photo: string, key: number) => {
                             return <img src={`${HOST}${photo}`} {...image} key={key} alt="service-image"/>;
                        })
                    }
                    </div>
                </Dialog>
            </div>
        );
    }
}

const wrapper = css({
    paddingTop: '25px'
});

const image = css({
    width: '20%' 
});

const styles = {
    textField: {
        width: '50%'
    },
    deleteButton: {
        position: 'absolute',
        left: '0'
    },
};

export default ServicesList;