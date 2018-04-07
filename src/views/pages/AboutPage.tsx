import * as React from 'react';
import EmployeesSiteList from '../components/employees/EmployeesSiteList';
import ReviewsSiteList from '../components/reviews/ReviewsSiteList';
import { css } from 'glamor';
import BasePage from './BasePage';

class AboutPage extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchEmployees();
        this.props.fetchReviews();
    }

    render() {
        return (
            <BasePage>
                <section {...commonInfoStyles}>
                    <img src={process.env.PUBLIC_URL + '/images/children-slider.jpg'} alt="children"/>
                    <div className="intro-text">
                        <img src={process.env.PUBLIC_URL + '/images/kids-event.png'} alt="kids-event"/>
                        <p>
                            Мы – профессиональная и креативная команда, которая любит нести детям радость и качественно
                            выполнять свою работу. Каждый сценарий индивидуален и
                            придумывается с учетом возраста, и темы торжества. Мы гарантируем полное соответствие
                            образа к выбранной программе. Сомневаетесь? Проверьте сами.
                        </p>
                    </div>
                </section>
                <EmployeesSiteList {...this.props}/>
                <ReviewsSiteList {...this.props}/>
            </BasePage>
        );
    }
}

const commonInfoStyles = css({
    backgroundColor: '#f2e3e8',
    height: '100vh',
    fontSize: '22px',
    '>img': {
        width: '60%',
        boxShadow: '0px 0px 50px 3px #f7a3ee'
    },
    ' img': {
        display: 'block',
        margin: '0px auto 25px auto'
    },
    ' .intro-text': {
        display: 'flex',
        justifyContent: 'center'
    }
});

export default AboutPage;