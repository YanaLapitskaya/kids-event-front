import * as React from 'react';
import { css } from 'glamor';
import { NavLink } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return(
            <div {...styles}>
                <div className="menu">
                    <NavLink to={'/'} className="about-button">
                        О нас
                    </NavLink>
                    <NavLink to={'/gallery'}  className="gallery-button">
                        Фото
                    </NavLink>
                    <NavLink to={'/services'} className="services-button">
                        Услуги
                    </NavLink>
                    <NavLink to={'/charity'}>
                        Благотворительность
                    </NavLink>
                </div>
                <div {...contactsStyles}>
                    <p>+375291357999</p>
                    <a className="inst-btn" href="https://www.instagram.com/kids_event.by/">
                        <i className="fab fa-instagram"/>
                    </a>
                </div>
            </div>
        );
    }
}

const styles = css({
    height: '150px',
    backgroundColor: '#a3ade8',
    padding: '25px',
    display: 'flex',
    justifyContent: 'center',
    ' .menu': {
        display: 'flex',
        width: '200px',
        flexDirection: 'column',
        borderRight: '1px solid #000',
        textAlign: 'center  '
    },
    ' a': {
        color: '#000',
    }
});

const contactsStyles = css({
    margin: '0px 25px',
    fontSize: '25px',
    width: '180px',
    textAlign: 'center',
    ' a': {
        ':hover': {
            opacity: '0.7'
        },
        boxSizing: 'border-box',
        textDecoration: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        color: '#fff !important',
        display: 'block',
        fontSize: '30px',
        lineHeight: '39px',
        margin: 'auto'
    },
    ' .inst-btn': {
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
        boxShadow: '0px 3px 10px rgba(0,0,0,.25)'
    }
}); 

export default Footer;