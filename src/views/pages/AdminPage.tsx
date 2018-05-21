import React from 'react';
import SideMenu from '../partials/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, withRouter } from 'react-router-dom';
import EmployeesEditList from '../components/employees/EmployeesEditList';
import ClientsEditList from '../components/clients/ClientsEditList';
import OrdersList from '../components/orders/OrdersList';
import AboutPage from './AboutPage';
import ServicesList from '../components/services/ServicesList';
import PrivateRoute from '../partials/PrivateRoute';
import LoginPage from './LoginPage';
  
class AdminPage extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchEmployees();
        this.props.fetchReviews();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch> 
                        <Route
                            exact={true}
                            path="/management/employees"
                            render={() => <EmployeesEditList {...this.props}/>}
                        />
                        {/* <Route
                            exact={false}
                            path="/login"
                            render={() => <LoginPage {...this.props}/>} 
                        />
                        <PrivateRoute
                            path="/management/employees"
                            component={EmployeesEditList}
                            {...this.props}
                        /> */}
                        <Route
                            exact={true}
                            path="/management/clients"
                            render={() => <ClientsEditList {...this.props}/>}
                        />
                        <Route
                            exact={true}
                            path="/management/orders"
                            render={() => <OrdersList {...this.props}/>}
                        />
                        <Route
                            exact={true}
                            path="/management/services"
                            render={() => <ServicesList {...this.props}/>}
                        />
                        <Route
                            exact={false}
                            path="/management"
                            render={() => <EmployeesEditList {...this.props}/>}
                        />
                        <Route
                            exact={true}
                            path="/"
                            render={() => <AboutPage {...this.props}/>}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default withRouter(AdminPage);