import BasePage from './BasePage';
import React from 'react';
import { css } from 'glamor';

class CharityPage extends React.Component<any, any> {
    render() {
        return (
            <BasePage>
                <div {...styles}>
                    Следите за новостями в социальных сетях! :)
                </div>
            </BasePage>
        );
    }
}

const styles = css({
    padding: '30px 50px',
    height: '100%'
});

export default CharityPage;