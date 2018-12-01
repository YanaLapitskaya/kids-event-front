import * as React from 'react';
import AboutPage from './views/pages/AboutPage';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ServicesPage from './views/pages/ServicesPage';
import { actionFetchReviews } from './redux/actions/ReviewActions';
import { connect } from 'react-redux';
import {
    actionAddEmployee,
    actionDeleteEmployee,
    actionEditEmployee,
    actionFetchEmployees
} from './redux/actions/EmployeeActions';
import { AppState } from './redux/AppState';
import { bindActionCreators } from 'redux';
import { actionFetchServices, actionEditService, actionAddService, actionDeleteService } from './redux/actions/ServiceActions';
import AdminPage from './views/pages/AdminPage';
import { actionFetchClients, actionEditClient, actionAddClient, actionDeleteClient } from './redux/actions/ClientActions';
import { actionFetchOrders, actionEditOrder, actionAddOrder } from './redux/actions/OrderActions';
import LoginPage from './views/pages/LoginPage';
import { actionLogin } from './redux/actions/UserActions';
import { HOST } from './Constants';
import CharityPage from './views/pages/CharityPage';
import GalleryPage from './views/pages/GalleryPage';

const Login: React.SFC<void> = () => {
    window.location.replace(`${HOST}/login`);
    return null;
};

class App extends React.Component {
  render() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        render={() => <AboutPage {...this.props}/>}
                    />
                    <Route
                        exact={true}
                        path="/services"
                        render={() => <ServicesPage {...this.props}/>}
                    />
                    <Route
                        exact={true}
                        path="/charity"
                        render={() => <CharityPage {...this.props}/>}
                    />
                    <Route
                        exact={true}
                        path="/gallery"
                        render={() => <GalleryPage  {...this.props}/>}
                    />
                    <Route path="/login" component={Login}/>
                    <Route
                        exact={false}
                        path="/login"
                        render={() => <LoginPage {...this.props}/>} 
                    />
                    <Route
                        exact={false}
                        path="/management"
                        render={() => <AdminPage {...this.props}/>}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
    return {
        employees: state.employees,
        reviews: state.reviews,
        services: state.services,
        clients: state.clients,
        orders: state.orders,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchEmployees: bindActionCreators(actionFetchEmployees, dispatch),
        editEmployee: bindActionCreators(actionEditEmployee, dispatch),
        addEmployee: bindActionCreators(actionAddEmployee, dispatch),
        deleteEmployee: bindActionCreators(actionDeleteEmployee, dispatch),

        fetchReviews: bindActionCreators(actionFetchReviews, dispatch),

        fetchServices: bindActionCreators(actionFetchServices, dispatch),
        editService: bindActionCreators(actionEditService, dispatch),
        addService: bindActionCreators(actionAddService, dispatch),
        deleteService: bindActionCreators(actionDeleteService, dispatch),

        fetchClients: bindActionCreators(actionFetchClients, dispatch),
        editClient: bindActionCreators(actionEditClient, dispatch),
        addClient: bindActionCreators(actionAddClient, dispatch),
        deleteClient: bindActionCreators(actionDeleteClient, dispatch),

        fetchOrders: bindActionCreators(actionFetchOrders, dispatch),
        editOrder: bindActionCreators(actionEditOrder, dispatch),
        addOrder: bindActionCreators(actionAddOrder, dispatch),
        
        login: bindActionCreators(actionLogin, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
