import * as React from 'react';
import { css } from 'glamor';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header {...headerStyles}>
                <img className="clouds" src={process.env.PUBLIC_URL + '/images/clouds.svg'}/>
                {/*<img className="left-tree" src={process.env.PUBLIC_URL + '/images/left-tree.svg'}/>*/}
                <div>
                    <img src={process.env.PUBLIC_URL + '/images/slogan.png'} alt="slogan"/>
                    <div id="logo">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" height="180px" width="300px"/>
                    </div>
                    <div {...contactsStyles}>
                        <button>
                            <img src={process.env.PUBLIC_URL + '/images/phone-icon.png'}/>(+375 29)135-7-999
                        </button>
                        <div {...socialsStyles}>
                            <a className="inst-btn" href="https://www.instagram.com/kids_event.by/">
                                <i className="fab fa-instagram"/>
                            </a>
                            <a className="vk-btn" href="https://vk.com">
                                <i className="fab fa-vk"/>
                            </a>
                        </div>
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

const contactsStyles = css({
    marginLeft: '-65px',
    ' a': {
        marginLeft: '10px',
        ':hover': {
            opacity: '0.7'
        },
        boxSizing: 'border-box'
    },
    ' button': {
        backgroundColor: '#ff99b5',
        color: '#fff',
        fontFamily: '\'El Messiri\', sans-serif',
        fontSize: '1.3rem',
        border: 'none',
        boxShadow: '0px 3px 10px rgba(0,0,0,.25)',
        borderRadius: '20px',
        padding: '5px 5px',
        ' img': {
            width: '30px',
            height: '30px',
            marginRight: '5px'
        }
    }
});

const socialsStyles = css({
    display: 'flex',
    justifyContent: 'center',
    ' a': {
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        color: 'white',
        display: 'block',
        fontSize: '30px',
        lineHeight: '53px'
    },
    ' .inst-btn': {
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        boxShadow: '0px 3px 10px rgba(0,0,0,.25)',
        margin: '5px 5px'
    },
    ' .vk-btn': {
        backgroundColor: '#4a76a8',
        boxShadow: '0px 3px 10px rgba(0,0,0,.25)',
        margin: '5px 5px'
    }
});

const headerStyles = css({
    backgroundColor: '#acd7b9',
    backgroundImage: 'url("./../images/circle.png")',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    fontFamily: 'PFKidsPro, sans-serif',
    '>div': {
        display: 'flex',
        flexColumns: '1fr 1fr 1fr',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center center',
        '>img': {
            width: '220px',
            flex: '0 0 230px',
            margin: '0px -70px 0px 0px',
        }
    },
    ' .clouds': {
        position: 'absolute',
        zIndex: '-1'
    },
    ' .left-tree': {
        position: 'absolute'
    },
    ' .slogan': {
        fontSize: '35px',
        fontWeight: '900'
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