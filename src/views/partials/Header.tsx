import * as React from 'react';
import { css } from 'glamor';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header {...headerStyles}>
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
                <nav {...navStyles}>
                    <NavLink to={'/'} className="about-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-about.svg'}/>
                            <div>О нас</div>
                        </div>
                    </NavLink>
                    <a href="" className="gallery-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-photo.svg'}/>
                            <div>Фото</div>
                        </div>
                    </a>
                    <NavLink to={'/services'} className="services-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-services.svg'}/>
                            <div>Услуги</div>
                        </div>
                    </NavLink>
                    <a href="" className="charity-button">
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

const headerStyles = css({
    backgroundColor: '#acd7b9',
    backgroundImage: 'url("./../images/circle.svg")',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    fontFamily: 'PFKidsPro, sans-serif !important',
    '>div': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center center'
    },
    ' .clouds': {
        position: 'absolute'
    },
    ' .slogan': {
        fontSize: '35px',
        fontWeight: '900'
    },
    ' .phone-container': {
        fontSize: '25px'
    }
});

const navStyles = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: '900',
    textAlign: 'center',
    marginTop: '-60px',
    ' a': {
        color: '#1c5791',
        textDecoration: 'none',
        verticalAlign: 'middle',
        lineHeight: '50px',
        ':hover': {
            color: '#963e96'
        },
        ':active': {
            color: '#963e96'
        }
    },
    ' .cloud-wrapper': {
        position: 'relative',
        textAlign: 'center',
        ' div': {
            position: 'absolute',
            top: '60%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop: '-10px'
        }
    },
    ' .about-button': {
        width: '160px',
        height: '90px'
    },

    ' .gallery-button': {
        width: '180px',
        height: '80px'
    },

    ' .services-button': {
        width: '170px',
        height: '100px'
    },

    ' .charity-button': {
        width: '210px',
        height: '60px'
    }
});

export default Header;