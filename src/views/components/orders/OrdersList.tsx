import * as React from 'react';
import { HOST } from '../../../Constants';
import { css } from 'glamor';
import SideMenu from '../../partials/SideMenu';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class OrdersList extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchOrders();
    }

    render() {
        return(
            <div>
                <SideMenu/>
                <div>
                    {this.props.orders.map((order, ind) => {
                        return(
                            <Card key={ind}>
                                <CardHeader
                                title="Without Avatar"
                                subtitle="Subtitle"
                                actAsExpander={true}
                                showExpandableButton={true}
                                />
                                <CardActions>
                                <FlatButton label="Action1" />
                                <FlatButton label="Action2" />
                                </CardActions>
                                <CardText expandable={true}>
                                    {order.date}
                                    {order.comments}
                                    {order.price}
                                </CardText>
                            </Card>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default OrdersList;