import BasePage from './BasePage';
import React from 'react';
import { css } from 'glamor';
import ImageGallery from 'react-image-gallery';

class GalleryPage extends React.Component<any, any> {
    files = [];
    componentDidMount() {
        for (let i = 1; i < 35; i++ ) {
            this.files.push({
                original: process.env.PUBLIC_URL + `/images/02Febrary/${i}-min.jpg`,
                thumbnail: process.env.PUBLIC_URL + `/images/02Febrary/${i}_tn.jpg`
            });
        }
    }

    render() {
        return (
            <BasePage>
                <div {...styles}>
                    <ImageGallery items={this.files} />
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