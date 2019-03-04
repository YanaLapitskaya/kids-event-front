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
            <BasePage {...this.props}>
                <section {...slider}>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-item active">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 1.jpg'} alt="First slide"/>
                            
                            </div>
                            <div className="carousel-item">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 2.jpg'} alt="Third slide"/>

                            </div>
                            <div className="carousel-item">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 3.jpg'} alt="Third slide"/>

                            </div>
                            <div className="carousel-item">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 4.jpg'} alt="Third slide"/>

                            </div>
                            <div className="carousel-item">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 5.jpg'} alt="Third slide"/>

                            </div>
                            <div className="carousel-item">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 6.jpg'} alt="Third slide"/>

                            </div>
                            <div className="carousel-item">
                                <img className="poster d-block" src={process.env.PUBLIC_URL + '/images/poster 7.jpg'} alt="Third slide"/>

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
                <section {...info}>
                    <div className="intro-text">
                        {/* <img src={process.env.PUBLIC_URL + '/images/kids-event.png'} alt="kids-event"/> */}
                        <p>
                         Если вы устали от стандартных программ, мыльных пузырей и воздушных собачек, тогда давайте знакомиться! 
                         Очень молодое, но не очень обычное агентство организации детских праздников раскрывает для вас душу! 
                         <br/>Вы спросите, почему стоит познакомиться именно с нами, а мы ответим, что просто потому, что обожаем свою работу, а значит уже почти влюблены в ваших детей. 
                         Мы знаем, чем живут сейчас малыши, как подарить им действительно искренние эмоции, супер-настроение и клёвые фотографии, потому что мы сами не далеко ушли. 
                         <br/>Мы большая семья kidsevent растворяемся в детстве и приглашаем вместе с нами!
                        </p>
                        <div>
                            <img src={process.env.PUBLIC_URL + '/images/lena-drawing.jpg'} alt="lena-drawing"/>
                        </div>
                    </div>
                </section>
                <EmployeesSiteList {...this.props}/>
                {/* <ReviewsSiteList {...this.props}/> */}
            </BasePage>
        );
    }
}

const slider = css({
    backgroundColor: '#f2e3e8',
    fontSize: '22px',
    padding: '15px 15vw',
    '@media only screen and (max-width: 700px)': {
        ' img': {
            maxWidth: '100%',
            padding: '0px'
        },
        ' .carousel-control-next-icon': {
            marginLeft: '-20vw'
        },
        ' .carousel-control-prev-icon': {
            marginRight: '-20vw'
        }
    },
    ' img': {
        display: 'block',
        margin: '0px auto',
        maxWidth: '60%',
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

const info = css({
    backgroundColor: '#d4e8fd',
    '@media only screen and (max-width: 700px)': {
        ' .intro-text p': {
            fontSize: '1em'
        },
        ' img': {
            width: '100%',
            height: 'auto'
        }
    },
    ' .intro-text p': {
        fontFamily: '\'Bad Script\', cursive !important',
        fontSize: '20px',
        textAlign: 'center'
    },
    ' img': {
        height: '60vh',
        width: 'auto',
        display: 'block',
        margin: '0px auto'
    }
});

export default AboutPage;