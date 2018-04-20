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
        this.props.fetchOrders();
    }

    render() {
        return(
            <div>
                <SideMenu/>
                <div>
                    { 
                        this.props.orders.map((order: Order, ind: number) => {
                             return <OrderCard editOrder={this.props.editOrder} orders={this.props.orders} order={order} key={ind} />;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default OrdersList;