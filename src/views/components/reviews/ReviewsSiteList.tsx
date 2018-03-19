import * as React from 'react';
import { css } from 'glamor';
import { HOST } from '../../../Constants';

class ReviewsSiteList extends React.Component<any, any> {
    render() {
        return (
            <section {...sectionStyles}>
                <h3>Отзывы</h3>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {this.props.reviews.map((r, ind) => {
                            return <div
                                    key={ind}
                                    className={ind === 0 ? 'review carousel-item active' : 'review carousel-item'}
                            >
                                <div className="wrapper">
                                    <div>
                                        <h4>{r.name}</h4>
                                        <p>{r.text}</p>
                                    </div>
                                    <img src={`${HOST}${r.photo}`} alt="review-photo"/>
                                </div>
                            </div>;
                        })}
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
        );
    }
}

const sectionStyles = css({
    backgroundColor: '#c8fffa',
    ' .carousel-control': {
        color: '#bada55'
    },
    ' .carousel-control-prev-icon': {
        backgroundImage: 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23000\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3E%3C/svg%3E")',
        color: 'black'
    },
    ' .carousel-control-next-icon': {
        backgroundImage : 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23000\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3E%3C/svg%3E")',
        color: 'black'
    },
    ' .carousel-inner': {
        border: '1px solid transparent',
        borderRadius: '4px',
        boxShadow: '0 1px 1px rgba(0,0,0,.5)',
    },
    ' .review': {
        backgroundColor: '#fff',
        width: '70vw',
        height: '400px',
        padding: '25px 15%',
        verticalAlign: 'center',
        ' .wrapper': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        ' img': {
            width: '45%',
            height: 'auto',
            marginLeft: '30px'
        }
    }
});

export default ReviewsSiteList;