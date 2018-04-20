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
        let service = this.props.service;
        return (
            <Card key={this.props.key} style={styles.card} onClick={() => this.props.handleOpen(service)}>
                <CardHeader
                    title={service.title}
                    subtitle={service.description}
                />
                <CardActions>Редактировать</CardActions>
                <CardText>
                    i can put more details here
                </CardText>
            </Card>
        );
    }
}

const styles = {
    card: {
        width: '55%',
        margin: 'auto'
    }
};

export default ServiceCard;