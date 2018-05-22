import * as React from 'react';
import { css } from 'glamor';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import People from 'material-ui/svg-icons/social/people';
import Contacts from 'material-ui/svg-icons/communication/contacts';
import RingVolume from 'material-ui/svg-icons/communication/ring-volume';
import Divider from 'material-ui/Divider';
import TagFaces from 'material-ui/svg-icons/image/tag-faces';
import InsertInvitation from 'material-ui/svg-icons/editor/insert-invitation';
import InsertChart from 'material-ui/svg-icons/editor/insert-chart';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router-dom';
import Badge from 'material-ui/Badge';

class SideMenu extends React.Component<any, any> {

    componentWillMount() {
        this.props.fetchOrders();
    }

    render() {
        const notProcessedOrdersCount = this.props.orders.filter(el => el.status === 'не обработан').length;
        
        return(
            <div {...wrapper}>
                <Paper {...paper}>
                    <Menu disableAutoFocus={true}>
                        <MenuItem
                            containerElement={<Link to="/management/clients" />}
                            primaryText="Клиенты"
                            leftIcon={<Contacts />}
                        />
                        <MenuItem 
                            containerElement={<Link to="/management/employees" />}
                            primaryText="Сотрудники" 
                            leftIcon={<People />} 
                        />
                        <MenuItem
                            containerElement={<Link to="/management/orders" />}
                            leftIcon={<RingVolume />} 
                        >
                            Заказы
                            <Badge
                                badgeContent={notProcessedOrdersCount}
                                primary={true}
                                badgeStyle={{top: -17, right: -45}}
                                style={styles.orderBtn}
                            />
                        </MenuItem>
                        <MenuItem 
                            containerElement={<Link to="/management/services" />}
                            primaryText="Услуги" 
                            leftIcon={<TagFaces />} 
                        />
                        <MenuItem 
                            containerElement={<Link to="/management/calendar" />}
                            primaryText="Календарь" 
                            leftIcon={<InsertInvitation />} 
                        />
                        <MenuItem 
                            containerElement={<Link to="/management/charts" />}
                            primaryText="Статистика" 
                            leftIcon={<InsertChart />} 
                        />
                        <Divider />
                        <MenuItem
                            containerElement={<Link to="/" />}
                            primaryText="Перейти на сайт"
                            leftIcon={<ArrowBack />}
                        />
                    </Menu>
                </Paper>
            </div>
        );
    }
}

const wrapper = css({
    height: '100vh',
    width: '30vw',
    display: 'inline-block'
});

const paper = css({
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0'
});

const styles = {
    orderBtn: {
        'padding': '0'
    }
};

export default SideMenu;