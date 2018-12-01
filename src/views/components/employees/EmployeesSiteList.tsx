import * as React from 'react';
import { HOST } from '../../../Constants';
import { css } from 'glamor';

class EmployeesSiteList extends React.Component<any, any> {
    render() {
        return(
            <section {...sectionStyles}>
                <img src={process.env.PUBLIC_URL + '/images/employees.png'} alt="employees"/>
                <div className="wrapper">
                    {/* {this.props.employees.slice(0, 4).map((empl, ind) => {
                        return(
                            <div key={ind} className="employee">
                                <div className="employee-photo">
                                    <img alt="employee-photo" src={`${HOST}${empl.photo}`}/>
                                </div>
                                <div className="employee-text">
                                    <h4>{empl.firstName}</h4>
                                    <h5>{empl.position}</h5>
                                    <p>{empl.description}</p>
                                </div>
                            </div>
                        );
                    })} */}
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Lena.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Елена</h4>
                            <p>Руководитель и вдохновитель нашей команды. Любит детей даже больше, чем Лунтик.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Evgenia.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Евгения</h4>
                            <p>Креатив нашей команды. Вдохновение черпает из каждого мгновения своей жизни.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Stas.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Станислав</h4>
                            <p>Аниматор нашего творческого коллектива. Дети любят его, кажется, за доброту, но мы уверены, что ещё и за улыбку, без которой он не бывает.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Evgeny.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Евгений</h4>
                            <p>Мозг нашей команды. Подсчитывает учеты, руководит бумагами и придает всем уверенности, поддерживает и наставляет.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Yana.png'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Яна</h4>
                            <p>Создатель матричной красоты. Без нее, команда была бы менее душевная.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Svetlana.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Светлана</h4>
                            <p>Голос нашей команды. В караоке она перепевает даже компьютер.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Nastya.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Настя</h4>
                            <p>Скромность ее украшение с детства. Но это не мешает ей перевоплощаться и доставлять удовольствие детишкам.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Lyba.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Люба</h4>
                            <p>Здравый смысл нашей команды. Менеджер с большой буквы, который держит все и всех под контролем.</p>
                        </div>
                    </div>
                    <div className="employee">
                        <div className="employee-photo">
                            <img alt="employee-photo" src={process.env.PUBLIC_URL + '/images/employees/Sasha.jpg'}/>
                        </div>
                        <div className="employee-text">
                            <h4>Саша</h4>
                            <p>Аниматор нашей семьи, которая всегда в надежде, что именинник угостит ее тортом или пиццей.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const sectionStyles = css({
    backgroundColor: '#dac0f0',
    ' .wrapper': {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginTop: '-40px'
    },
    ' .employee-text': {
        padding: '20px'
    },
    ' .employee-photo': {
        backgroundImage: 'url(images/sun.svg)',
        width: '300px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ' img': {
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            margin: '14px 0px 25px 0px'
        }
    },
    '>img': {
        marginTop: '-15px',
        width: '400px'
    },
    ' .employee': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%'
    }
});

export default EmployeesSiteList;