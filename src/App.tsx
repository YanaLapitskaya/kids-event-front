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
import { actionFetchServices } from './redux/actions/ServiceActions';
import AdminPage from './views/pages/AdminPage';

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
        services: state.services
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchEmployees: bindActionCreators(actionFetchEmployees, dispatch),
        editEmployee: bindActionCreators(actionEditEmployee, dispatch),
        addEmployee: bindActionCreators(actionAddEmployee, dispatch),
        deleteEmployee: bindActionCreators(actionDeleteEmployee, dispatch),
        fetchReviews: bindActionCreators(actionFetchReviews, dispatch),
        fetchServices: bindActionCreators(actionFetchServices, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App as any);
