import * as React from 'react';
import EmployeesSiteList from '../components/employees/EmployeesSiteList';
import ReviewsSiteList from '../components/reviews/ReviewsSiteList';
import { css } from 'glamor';
import BasePage from './BasePage';
import SideMenu from '../partials/SideMenu';

class CalendarPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <SideMenu {...this.props}/>
                <iframe {...frame} src="https://calendar.google.com/calendar/embed?src=yanalapitskay%40gmail.com&ctz=Europe%2FMinsk" />
            </div>
        );
    }
}

const frame = css({
    border: '0',
    width: '800',
    height: '600',
    frameborder: '0',
    scrolling: 'no'
});

export default CalendarPage;