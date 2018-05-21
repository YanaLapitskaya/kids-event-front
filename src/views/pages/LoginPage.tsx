import Header from '../partials/Header';
import Footer from '../partials/Footer';
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import GoogleLogin from 'react-google-login';

class LoginPage extends React.Component<any, any> {
    goodResponseGoogle = (response) => {
        this.props.login(response);
    }

    badResponseGoogle = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div>
                <p>Для доступа к панеле управления, нужно провести аутентификацию через Google Account</p>
                {/* <RaisedButton label="Sign in with Google" onClick={() => this.props.login()}/> */}
                <GoogleLogin
                    clientId="865833902525-s5obh0o15m615maneb92fdpn34g5c7kj.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.goodResponseGoogle}
                    onFailure={this.badResponseGoogle}
                />
            </div>
        );
    }
}

export default LoginPage;