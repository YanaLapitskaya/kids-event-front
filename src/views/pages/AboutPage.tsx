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
                        <h2>KidsEvent</h2>
                        <p>
                            Мы – профессиональная и креативная команда, которая любит нести детям радость и качественно
                            выполнять свою работу. Наш принцип — хорошее настроение всем присутствующим. У нас найдется
                            все необходимое, чтобы сделать ваше мероприятие по — настоящему интересным, веселым и
                            незабываемым. Лучшие аниматоры и клоуны Минска, самые яркие костюмы, авторские, оригинальные
                            игры. Мы знаем, как удивить родителей и порадовать ребят. Каждый сценарий индивидуален и
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
    ' img': {
        display: 'block',
        margin: '-25px auto 25px auto'
    },
    ' .intro-text': {
        display: 'flex',
        justifyContent: 'center'
    },
    ' p': {
        marginLeft: '35px'
    }
});

export default AboutPage;