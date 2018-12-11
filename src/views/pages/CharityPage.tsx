import BasePage from './BasePage';
import React from 'react';
import { css } from 'glamor';

class CharityPage extends React.Component<any, any> {
    render() {
        return (
            <BasePage>
                <div {...styles}>
                    Наша дружная семья KidsEvent хотела бы подарить частичку души каждому ребенку в этой стране и не только. <br/> 
                    Особенно тем, у кого нет возможности посещать праздничные меропртиятия. <br/> 
                    Мы говорим о детским домах, интернатах и домах молюток. <br/> 
                    На вырученные средства с каждого праздника мы готовы радовать деток своими программами, подарками и хорошим настроением :) <br/> 
                    Фотоотчеты будут появляться очень скоро у нас на сайте в разделе <b>«Фото»</b> и в нашем инстаграме <b>Kids_event.by</b>.
                </div>
            </BasePage>
        );
    }
}

const styles = css({
    padding: '30px 50px',
    height: '100%',
    textAlign: 'center',
    fontSize: '1.2rem'

});

export default CharityPage;