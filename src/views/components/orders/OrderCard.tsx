import * as React from 'react';
import { HOST } from '../../../Constants';
import { css } from 'glamor';
import SideMenu from '../../partials/SideMenu';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Order from '../../../models/Order';
import IconButton from 'material-ui/IconButton';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Client from '../../../models/Client';

interface OrderCardProps {
    order: Order;
    orders: Array<Order>;
    clients: Array<Client>;
    editOrder: Function;
    key: number;
}

interface OrderCardState {
    isButtonsShown: boolean;
}

enum OrderStatuses {
    notProcessed = 'не обработан',
    processed = 'обработан',
    canceled = 'отменён'
}

class OrderCard extends React.Component<OrderCardProps, OrderCardState> {
    state = {
        isButtonsShown: false
    };

    handleOrderApproved(e: any) {
        let order = this.props.order;
        order.status = OrderStatuses.processed;
        this.props.editOrder(order);
        this.setState({
            isButtonsShown: false
        });
    }

    handleOrderReject(e: any) {
        let order = this.props.order;
        order.status = OrderStatuses.canceled;
        this.props.editOrder(order);
        this.setState({
            isButtonsShown: false
        });
    }

    changeStatus(newStatus: string) {
        let order = this.props.order;
        if (order.status === newStatus) {
            newStatus = OrderStatuses.notProcessed;
        }
        order.status = newStatus;
        this.props.editOrder(order);
    }

    getCheckmarkApply(status: string) {
        if (status === OrderStatuses.processed || status === OrderStatuses.notProcessed) {
            return (
                <IconButton
                    iconStyle={styles.applyIcon}
                    style={styles.small}
                    onClick={() => this.changeStatus(OrderStatuses.processed)}
                >
                    <NavigationCheck />
                </IconButton>
            );
        } 
    }

    getCheckmarkReject(status: string) {
        if (status === OrderStatuses.canceled || status === OrderStatuses.notProcessed) {
            return (
                <IconButton
                    iconStyle={styles.rejectIcon}
                    style={styles.small}
                    onClick={() => this.changeStatus(OrderStatuses.canceled)}
                >
                    <NavigationClose />
                </IconButton>
            );
        }
    }

    render() {
        let services = this.props.order.Services.map(s => s.title.trim()).join(', ');
        let {id, dateOrder, dateService, comments, status, client_id} = this.props.order;
        let client = this.props.clients.find(el => el.id === client_id);

        return(            
            <Card style={styles.card}>
                {this.getCheckmarkApply(status)}
                {this.getCheckmarkReject(status)}
                <p {...orderDate}>{new Date(dateOrder).toLocaleString('ru-RU', {timeZone: 'Europe/Moscow'})}</p>
                <CardHeader
                    title={`${services.trim()}: ${new Date(dateService).toLocaleString('ru-RU')}`}
                    subtitle={comments ? comments : null}
                    actAsExpander={true}
                />
                <CardText>
                    { client ? 
                        client.name + ', +375' + client.phone
                        : null 
                    }
                </CardText>
            </Card>
        );
    }
}

const styles = {
    card: {
        width: '500px',
        margin: '0px auto 25px auto',
        position: 'relative'
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
    },
    applyIcon: {
        width: 36,
        height: 36,
        color: 'green'
    },
    rejectIcon: {
        width: 36,
        height: 36,
        color: '#bd1717'
    }
  };
  
  const orderDate = css({
    position: 'absolute',
    top: '25px',
    right: '20px'
  });

  export default OrderCard;