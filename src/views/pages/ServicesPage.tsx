import * as React from 'react';

class ServicesPage extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchServices();
    }

    render() {
        return(
            <main>
                { this.props.services.map((s, ind) => {
                    return(
                            <div key={ind} className="service">
                                <img />
                                <p className="price">Цена:{s.price}</p>
                                <button>Заказать</button>
                                <h2>{s.title}</h2>
                                <p>{s.description}</p>
                            </div>
                        );
                    })
                }
            </main>
        );
    }
}

export default ServicesPage;