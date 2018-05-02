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
import OrderCard from './OrderCard';

class OrdersList extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchClients();
    }
    orderSortRule(ord1: Order, ord2: Order) {
        return new Date(ord2.dateOrder).getTime() - new Date(ord1.dateOrder).getTime();
    }
    
    render() {
        let notProcessedOrder = this.props.orders.filter(ord => ord.status === 'не обработан');
        let processedOrder = this.props.orders.filter(ord => ord.status !== 'не обработан');
        let sortedOrders = [...notProcessedOrder.sort(this.orderSortRule), ...processedOrder.sort(this.orderSortRule)];

        return(
            <div>
                <SideMenu {...this.props}/>
                <div {...wrapper}>
                    {
                        sortedOrders.map((order: Order, ind: number) => {
                             return <OrderCard editOrder={this.props.editOrder} orders={this.props.orders} clients={this.props.clients} order={order} key={ind} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

const wrapper = css({
    paddingTop: '25px'
});

export default OrdersList;