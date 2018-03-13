import * as React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="clouds" src={process.env.PUBLIC_URL + '/images/clouds.svg'}/>
                <div>
                    <div className="slogan">Растворяемся в детстве</div>
                    <div id="logo">
                        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="logo" height="180px" width="300px"/>
                    </div>
                    <div className="phone-container">
                        <p>(+375 29)135-7-999</p>
                        <button>Заказать звонок 24/7</button>
                    </div>
                </div>
                <nav>
                    <a href="/about" className="about-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-about.svg'}/>
                            <div>О нас</div>
                        </div>
                    </a>
                    <a href="/gallery" className="gallery-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-photo.svg'}/>
                            <div>Фото</div>
                        </div>
                    </a>
                    <a href="/services" className="services-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-services.svg'}/>
                            <div>Услуги</div>
                        </div>
                    </a>
                    <a href="/charity" className="charity-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-charity.svg'}/>
                            <div>Благотворительность</div>
                        </div>
                    </a>
                </nav>
            </header>
        );
    }
}

export default Header;