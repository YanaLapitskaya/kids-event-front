import * as React from 'react';
import { HOST } from '../../../Constants';
import { css } from 'glamor';

class EmployeesSiteList extends React.Component<any, any> {
    render() {
        return(
            <section {...sectionStyles}>
                <h3>Наши сотрудники</h3>
                <div className="wrapper">
                    {this.props.employees.map((empl, ind) => {
                        return(
                            <div key={ind} className="employee">
                                <img alt="employee-photo" src={`${HOST}${empl.photo}`}/>
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
    ' .wrapper': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    ' img': {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        margin: '0px 45px 25px 0px'
    },
    ' .employee': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '30%'
    }
});

export default EmployeesSiteList;