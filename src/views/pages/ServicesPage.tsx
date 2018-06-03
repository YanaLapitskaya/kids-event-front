import * as React from 'react';
import BasePage from './BasePage';
import { css } from 'glamor';
import { HOST } from '../../Constants';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';
import Order from '../../models/Order';
import Client from '../../models/Client';

class ServicesPage extends React.Component<any, any> {
    state = {
        open: false,
        order: undefined,
        name: '',
        phone: '',
        service: undefined,
        error: ''
    };

    componentWillMount() {
        this.props.fetchServices();
    }

    handleOpen = (service) => {
        this.props.fetchClients();
        this.setState({
            open: true,
            order: new Order(),
            service: service
        });
      }
    
    handleClose = (e) => {
        if (e.target.innerText === 'СОХРАНИТЬ') {
            if (!this.state.phone || !this.state.name) {
                this.setState({
                    error: 'Заполните обязательные поля!'
                });
            } else {
                let client = this.findClient();
                if (client) {
                    this.state.order.client_id = client.id;
                    this.addOrder();
                } else {
                    this.props.addClient(new Client( undefined, this.state.name, Number(this.state.phone))).then(() => {
                        let newClient = this.findClient();
                        this.state.order.client_id = newClient.id;
                        this.addOrder();
                    });
                }
            }
        } else {
            this.setState({
                open: false,
                order: undefined,
                error: ''
            });
        }
    }

    addOrder = () => {
        this.state.order.status = 'не обработан';
        this.state.order.Services = [this.state.service];
        this.state.order.price = this.state.service.price;
        this.props.addOrder(this.state.order);
        this.setState({
            open: false,
            order: undefined
        });
    }

    findClient = () => {
        return this.props.clients.find((cl) => {
            return cl.phone && cl.phone.toString() === this.state.phone;
        });
    }

    handleChange = (e, v) => {
        if ((e.target.id) === 'name') {
            this.state.name = v;
        } else if ((e.target.id) === 'phone') {
            this.state.phone = v;
        } else if ((e.target.id) === 'comments') {
            this.state.order.comments = v;
        }
    }

    handleDateChange = (e, v) => {
        let order = this.state.order;
        order.dateService.setDate(v.getDate());
        order.dateService.setMonth(v.getMonth());
        order.dateService.setFullYear(v.getFullYear());
    }

    handleTimeChange = (e, v) => {
        let order = this.state.order;
        order.dateService.setMinutes(v.getMinutes());
        order.dateService.setHours(v.getHours());
        order.dateService.setSeconds(v.getSeconds());
    }

    render() {
        const actions = [
            <FlatButton
                label="Отменить"
                key="cancel"
                secondary={true}
                onClick={(e) => this.handleClose(e)}
            />,
            <FlatButton
                label="Сохранить"
                key="ok"
                primary={true}
                onClick={(e) => this.handleClose(e)}
            />
        ];

        return(
            <BasePage>
                <div {...styles}>
                    { this.props.services.map((s, ind) => {
                        return(
                                <div key={ind} className="service">
                                    <img src={HOST + s.photos[0]}/>
                                    <div>
                                        <h2>{s.title}</h2>
                                        <p>{s.description}</p>
                                        <p className="price">Цена: {s.price} бел. руб.</p>
                                        <RaisedButton onClick={() => this.handleOpen(s)}>Заказать</RaisedButton>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <Dialog
                    title="Оформление заказа"
                    titleStyle={{textAlign: 'center'}}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <div {...errorMsg}>{this.state.error}</div>
                    <div {...dialogWrapper}>
                        <TextField floatingLabelText="Имя (обязательно)"
                            style={stylesMaterial.bigInput}
                            id="name" 
                            onChange={(e, v) => this.handleChange(e, v)}
                        /><br />
                        +375
                        <TextField floatingLabelText="Телефон (обязательно)"
                            style={stylesMaterial.phoneInput}
                            id="phone" 
                            onChange={(e, v) => this.handleChange(e, v)}
                        /><br />
                        <div {...dateTime}>
                            <DatePicker 
                                hintText="Дата"
                                onChange={(e, v) => this.handleDateChange(e, v)}
                                id="date"
                            />
                        </div>
                        <div {...dateTime}>
                            <TimePicker
                                format="24hr"
                                hintText="Время"
                                onChange={(e, v) => this.handleTimeChange(e, v)}
                                id="time"
                            />
                        </div><br />
                        <TextField floatingLabelText="Комментраии"
                            style={stylesMaterial.bigInput}
                            multiLine={true}
                            rows={2}
                            rowsMax={2}
                            id="comments" onChange={(e, v) => this.handleChange(e, v)}
                        />
                    </div>
                </Dialog>
            </BasePage>
        );
    }
}

const stylesMaterial = {
    bigInput: {
        width: '400px'
    },
    phoneInput: {
        width: '350px',
        marginLeft: '10px'
    }
};

const dateTime = css({
    width: '150px',
    overflow: 'hidden',
    display: 'inline-block',
    margin: '20px 20px 0px 20px'
});

const errorMsg = css({
    color: '#B00020',
    margin: 'auto',
    width: '300px'
});

const styles = css({
    backgroundColor: '#dbc0f2',
    padding: '10px 0px',
    ' .service': {
        width: '70vw',
        backgroundColor: '#fff',
        margin: '0px auto 10px auto',
        display: 'grid',
        gridTemplateColumns: '35% 65%',
        ' img': {
            width: '100%'
        },
        '> div': {
            padding: '35px'
        },
        ' .price': {
            display: 'inline-block',
            marginRight: '20px'
        }
    }
});

const dialogWrapper = css({
    margin: 'auto',
    width: '400px'
});

export default ServicesPage;