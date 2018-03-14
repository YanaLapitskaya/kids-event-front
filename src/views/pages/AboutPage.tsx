import * as React from 'react';

class AboutPage extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchEmployees();
        this.props.fetchReviews();
    }

    render() {
        return (
            <main>
                <div id="slider" />
                <section id="common-info">
                    <h2>KidsEvent</h2>
                    <p>
                        Мы – профессиональная и креативная команда, которая любит нести детям радость и качественно
                        выполнять свою работу. Наш принцип — хорошее настроение всем присутствующим. У нас найдется
                        все необходимое, чтобы сделать ваше мероприятие по — настоящему интересным, веселым и
                        незабываемым. Лучшие аниматоры и клоуны Минска, самые яркие костюмы, авторские, оригинальные
                        игры. Мы знаем, как удивить родителей и порадовать ребят. Каждый сценарий индивидуален и
                        придумывается с учетом возраста, и темы торжества. Мы гарантируем полное соответствие образа к
                        выбранной программе. Сомневаетесь? Проверьте сами.
                    </p>
                </section>
                <section id="employees">
                    <h3>Наши сотрудники</h3>
                    {this.props.employees.map((empl, ind) => {
                        return(
                            <div key={ind} className="employee">
                                <h4>{empl.firstName}</h4>
                                <p>{empl.description}</p>
                            </div>
                        );
                    })}
                </section>
                <section id="reviews">
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
            </main>
        );
    }
}

export default AboutPage;