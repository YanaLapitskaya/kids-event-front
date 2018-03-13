import * as React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <main>
                <div id="slider" />
                <section id="common-info">
                    <h2>KidsEvent</h2>
                    <p>блаблабла</p>
                </section>
                <section id="employees">
                    <h3>Наши сотрудники</h3>
                    <div className="employee">
                    <h4>Yana</h4>
                    <p>Klevaya devchonkcka</p>
                    </div>
                </section>
                <section id="reviews">
                    <h3>Отзывы</h3>
                    <div className="review">
                    <h4>Lena</h4>
                    <p>Vso good</p>
                    </div>
                </section>
            </main>
        );
    }
}
export default AboutPage;