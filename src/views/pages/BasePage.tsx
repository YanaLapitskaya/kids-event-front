import Header from '../partials/Header';
import Footer from '../partials/Footer';
import React from 'react';

class BasePage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        );
    }
}

export default BasePage;