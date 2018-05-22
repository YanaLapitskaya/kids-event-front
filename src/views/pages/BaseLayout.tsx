import Header from '../partials/Header';
import Footer from '../partials/Footer';
import React from 'react';
import SideMenu from '../partials/SideMenu';
import { css } from 'glamor';

class BaseLayout extends React.Component<any, any> {
    render() {
        return (
            <div {...wrapper}>
                <SideMenu {...this.props}/>
                {this.props.children}
            </div>
        );
    }
}

const wrapper = css({
    display: 'flex'
});

export default BaseLayout;