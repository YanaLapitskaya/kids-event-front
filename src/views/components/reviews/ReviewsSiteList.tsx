import * as React from 'react';

class ReviewsSiteList extends React.Component<any, any> {
    render() {
        return(
            <section style={styles.section}>
                <h3>Отзывы</h3>
                {this.props.reviews.map((r, ind) => {
                    return(
                        <div key={ind} className="review">
                            <h4>{r.name}</h4>
                            <p>{r.text}</p>
                        </div>
                    );
                })}
            </section>
        );
    }
}

const styles = {
    section: {
        backgroundColor: '#c8fffa'
    }
};

export default ReviewsSiteList;