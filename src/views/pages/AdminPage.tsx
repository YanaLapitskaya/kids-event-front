import React from 'react';
import SideMenu from '../partials/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import EmployeesEditList from '../components/employees/EmployeesEditList';
import ClientsEditList from '../components/clients/ClientsEditList';
import OrdersList from '../components/orders/OrdersList';

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
                            exact={false}
                            path="/management"
                            render={() => <EmployeesEditList {...this.props}/>}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default AdminPage;