import * as React from 'react';
import { HOST } from '../../../Constants';
import { css } from 'glamor';

class EmployeesSiteList extends React.Component<any, any> {
    render() {
        return(
            <section {...sectionStyles}>
                <img src={process.env.PUBLIC_URL + '/images/employees.png'} alt="employees"/>
                <div className="wrapper">
                    {this.props.employees.slice(0, 4).map((empl, ind) => {
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
                    })}
                </div>
            </section>
        );
    }
}

const sectionStyles = css({
    backgroundColor: '#dac0f0',
    height: '100vh',
    ' .wrapper': {
        display: 'flex',
        justifyContent: 'center',
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