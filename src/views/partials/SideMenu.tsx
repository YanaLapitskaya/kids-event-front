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
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { Link } from 'react-router-dom';

class SideMenu extends React.Component {
    render() {
        return(
            <Paper {...paper}>
                <Menu>
                    <MenuItem
                        containerElement={<Link to="/profile" />}
                        primaryText="Клиенты"
                        leftIcon={<Contacts />}
                    />
                    <MenuItem primaryText="Сотрудники" leftIcon={<People />} />
                    <MenuItem primaryText="Заказы" leftIcon={<RingVolume />} />
                    <MenuItem primaryText="Программы" leftIcon={<TagFaces />} />
                    <MenuItem primaryText="Календарь" leftIcon={<InsertInvitation />} />
                    <Divider />
                    <MenuItem
                        containerElement={<Link to="/" />}
                        primaryText="Перейти на сайт"
                        leftIcon={<ArrowBack />}
                    />
                </Menu>
            </Paper>
        );
    }
}

const paper = css({
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0'
});

export default SideMenu;