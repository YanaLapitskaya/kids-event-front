import * as React from 'react';
import { css } from 'glamor';
import { HOST } from '../../../Constants';

class ReviewsSiteList extends React.Component<any, any> {
    render() {
        return (
            <section {...sectionStyles}>
                <img src={process.env.PUBLIC_URL + '/images/reviews.png'} alt="reviews"/>
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
    height: '100vh',
    '>img': {
        width: '260px',
        marginTop: '-15px',
    },
    ' .carousel': {
        boxShadow: '0px 0px 50px 3px #5ad0c5'
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
        ' .wrapper img': {
            width: '50%',
            height: 'auto',
            marginLeft: '30px'
        }
    }
});

export default ReviewsSiteList;