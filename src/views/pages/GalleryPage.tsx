import BasePage from './BasePage';
import React from 'react';
import { css } from 'glamor';

class GalleryPage extends React.Component<any, any> {
    render() {
        return (
            <BasePage>
                <div {...styles}>
                    Фотографии с мероприятий скоро появятся! :)
                </div>
            </BasePage>
        );
    }
}

const styles = css({
    padding: '30px 50px',
    height: '100%'
});

export default GalleryPage;