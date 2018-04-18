import React from 'react';
import SideMenu from '../partials/SideMenu';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import EmployeesEditList from '../components/employees/EmployeesEditList';

class AdminPage extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchEmployees();
        this.props.fetchReviews();
    }

    render() {
        return (
            <div>
                <SideMenu/>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact={true}
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