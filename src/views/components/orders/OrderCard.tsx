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

interface OrderCardProps {
    order: Order;
    key: number;
    orders: Array<Order>;
    editOrder: Function;
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

    showButtons() {
        this.setState({
            isButtonsShown: !this.state.isButtonsShown
        });
    }

    getCheckmark(status: string) {
        if (status === OrderStatuses.processed) {
            return (
                <IconButton
                    iconStyle={styles.smallIcon}
                    style={styles.small}
                    onClick={() => this.showButtons()}
                >
                    <NavigationCheck />
                </IconButton>
            );
        } else if (status === OrderStatuses.canceled) {
            return (
                <IconButton
                    iconStyle={styles.smallIcon}
                    style={styles.small}
                    onClick={() => this.showButtons()}
                >
                    <NavigationClose />
                </IconButton>
            );
        } else {
            return null;
        }
    }

    render() {
        let services = this.props.order.Services.map(s => s.title).join(', ');
        let {id, date, comments, status} = this.props.order;

        return(            
            <Card key={this.props.key} style={styles.card}>
                {this.getCheckmark(status)}
                <CardHeader
                    title={`${services}. Дата: ${date}. ${status}`}
                    subtitle={`${comments} `}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                {(status ===  OrderStatuses.notProcessed || this.state.isButtonsShown) ? 
                        (
                            <CardActions>
                                <IconButton
                                    iconStyle={styles.smallIcon}
                                    style={styles.small}
                                    id={id}
                                    onClick={(e) => this.handleOrderApproved(e)}
                                >
                                    <NavigationCheck />
                                </IconButton>
                                <IconButton
                                    iconStyle={styles.smallIcon}
                                    style={styles.small}
                                    id={id}
                                    onClick={(e) => this.handleOrderReject(e)}
                                >
                                    <NavigationClose />
                                </IconButton>
                            </CardActions>
                        ) 
                    : null
                }
                <CardText expandable={true}>
                    i can put more details here
                </CardText>
            </Card>
        );
    }
}

const styles = {
    card: {
        width: '500px',
        margin: '0px auto'
    },
    smallIcon: {
        width: 36,
        height: 36,
    },
    small: {
        width: 72,
        height: 72,
        padding: 16,
    }
  };
  
  export default OrderCard;