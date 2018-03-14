import * as React from 'react';

class EmployeesSiteList extends React.Component<any, any> {
    render() {
        return(
            <section style={styles.section} id="employees">
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
        );
    }
}

const styles = {
    section: {
        backgroundColor: '#dac0f0'
    }
};

export default EmployeesSiteList;