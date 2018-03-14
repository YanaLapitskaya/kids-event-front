import * as React from 'react';
import EmployeesSiteList from '../components/employees/EmployeesSiteList';
import ReviewsSiteList from '../components/reviews/ReviewsSiteList';

class AboutPage extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchEmployees();
        this.props.fetchReviews();
    }

    render() {
        return (
            <main>
                <section style={styles.commonInfo}>
                    <div id="slider" />
                    <div style={styles.commonInfoText}>
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
            </main>
        );
    }
}

const styles = {
    commonInfo: {
        backgroundColor: '#f2e3e8'
    },
    commonInfoText: {
        display: 'flex',
        justifyContent: 'center',
        width: '80vw'
    }
} as React.CSSProperties;

export default AboutPage;