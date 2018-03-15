import * as React from 'react';
import { css } from 'glamor';

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
                                <h4>{r.name}</h4>
                                <p>{r.text}</p>
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
    ' .review': {
        backgroundColor: '#ffa7c3',
        width: '70vw',
        height: '400px',
        padding: '25px 120px'
    }
});

export default ReviewsSiteList;