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
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-item active">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 2.jpg'} alt="First slide"/>
                            
                            </div>
                            <div className="carousel-item">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 1.jpg'} alt="Second slide"/>
                            
                            </div>
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </section>
                <section>
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
    height: 'calc(100vh - 220px)',
    fontSize: '22px',
    ' img': {
        display: 'block',
        margin: '0px auto 0px auto',
        maxWidth: '65%',
        height: 'auto'
    },
    ' .intro-text': {
        display: 'flex',
        justifyContent: 'center'
    },
    ' .poster': {
        borderRadius: '35px',
    },
    ' .carousel-control': {
        color: '#bada55'
    },
    ' .carousel-control-prev-icon': {
        backgroundImage: 'url(images/slider-left.png)',
        width: '100px',
        height: '100px'
    },
    ' .carousel-control-next-icon': {
        backgroundImage: 'url(images/slider-right.png)',
        width: '100px',
        height: '100px'
    }
});

export default AboutPage;