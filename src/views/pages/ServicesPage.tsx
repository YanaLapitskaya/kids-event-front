import * as React from 'react';
import BasePage from './BasePage';
import { css } from 'glamor';
import { HOST } from '../../Constants';

class ServicesPage extends React.Component<any, any> {
    componentWillMount() {
        this.props.fetchServices();
    }

    render() {
        return(
            <BasePage>
                <div {...styles}>
                    { this.props.services.map((s, ind) => {
                        return(
                                <div key={ind} className="service">
                                    <img src={HOST + s.photos[0]}/>
                                    <div>
                                        <p className="price">Цена:{s.price}</p>
                                        <button>Заказать</button>
                                    </div>
                                    <div>
                                        <h2>{s.title}</h2>
                                        <p>{s.description}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </BasePage>
        );
    }
}

const styles = css({
    backgroundColor: '#dbc0f2',
    padding: '10px 0px',
    ' .service': {
        width: '70vw',
        backgroundColor: '#fff',
        margin: '0px auto 10px auto',
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        ' img': {
            width: '100%'
        },
        ' :nth-child(2)': {
            justifySelf: 'center',
            alignSelf: 'center'
        },
        ' :nth-child(3)': {
            gridColumn: '1/3',
            margin: '10px 50px'
        }
    }
});

export default ServicesPage;