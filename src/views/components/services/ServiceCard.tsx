import * as React from 'react';
import { HOST } from '../../../Constants';
import { css } from 'glamor';
import SideMenu from '../../partials/SideMenu';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Order from '../../../models/Order';
import Service from '../../../models/Service';

interface ServiceProps {
    service: Service;
    key: number;
    handleOpen: Function;
    services: Array<Service>;
}

class ServiceCard extends React.Component<ServiceProps, any> {
    render() {
        let {title, description, price} = this.props.service;
        return (
            <Card style={styles.card} onClick={() => this.props.handleOpen(this.props.service)}>
                <p {...priceText}>{price} бел. руб.</p>
                <CardHeader
                    title={title}
                    subtitle={description}
                />
            </Card>
        );
    }
}

const styles = {
    card: {
        width: '55%',
        margin: '0px 0px 25px 100px',
        position: 'relative'
    }
};

const priceText = css({
    position: 'absolute',
    top: '15px',
    right: '20px',
    fontSize: '20px'
});

export default ServiceCard;