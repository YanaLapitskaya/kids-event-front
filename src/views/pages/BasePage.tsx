import Header from '../partials/Header';
import Footer from '../partials/Footer';
import React from 'react';
import { css } from 'glamor';

class BasePage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Header {...this.props}/>
                <main {...styles}>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}

const styles = css({
    minHeight: 'calc(100vh - 370px)',
    backgroundColor: '#f2e3e8'
});
export default BasePage;