import * as React from 'react';
import { css } from 'glamor';
import { NavLink } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class Header extends React.Component<any, any> {
    state = {
        open: false,
        phone: '',
        error: ''
    };

    handleClick(e: any) {
        this.setState({
            open: true,
            phone: ''
        });
    }

    handleChange(e: any, v: any) {
        this.state.phone = v;
    }

    handleClose = (e: any) => {
        if (e.target.innerText === 'Отправить') {
            if (!this.state.phone) {
                this.setState({
                    error: 'Заполните обязательные поля!'
                });
            } else {
                this.props.addOrder(this.state.phone);
            }
        } else {
            this.setState({
                open: false,
                error: ''
            });
        }
    }

    render() {
        const actions = [
            <FlatButton
                label="Отменить"
                key="cancel"
                secondary={true}
                onClick={(e) => this.handleClose(e)}
            />,
            <FlatButton
                label="Отправить"
                key="ok"
                primary={true}
                onClick={(e) => this.handleClose(e)}
            />
        ];
        return (
            <header {...headerStyles}>
                <img className="clouds" src={process.env.PUBLIC_URL + '/images/clouds.svg'}/>
                {/*<img className="left-tree" src={process.env.PUBLIC_URL + '/images/left-tree.svg'}/>*/}
                <div>
                    <img className="slogan" src={process.env.PUBLIC_URL + '/images/slogan.png'} alt="slogan"/>
                    <div id="logo">
                        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" height="180px" width="300px"/>
                    </div>
                    <div {...contactsStyles}>
                        <button 
                            // onClick={(e) => this.handleClick(e)}
                        >
                            <img src={process.env.PUBLIC_URL + '/images/phone-icon.png'}/>(+375 29)135-7-999
                        </button>
                        <div {...socialsStyles}>
                            <a className="inst-btn" href="https://www.instagram.com/kids_event.by/">
                                <i className="fab fa-instagram"/>
                            </a>
                            {/* <a className="vk-btn" href="https://vk.com">
                                <i className="fab fa-vk"/>
                            </a> */}
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
                    <NavLink to={'/gallery'} className="gallery-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-photo.svg'}/>
                            <div>Фото</div>
                        </div>
                    </NavLink>
                    <NavLink to={'/services'} className="services-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-services.svg'}/>
                            <div>Услуги</div>
                        </div>
                    </NavLink>
                    <NavLink to={'/charity'} className="charity-button">
                        <div className="cloud-wrapper">
                            <img src={process.env.PUBLIC_URL + '/images/menu-charity.svg'}/>
                            <div>Благотворительность</div>
                        </div>
                    </NavLink>
                </nav>
                <Dialog
                    title="Заказать звонок"
                    titleStyle={{textAlign: 'center'}}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    <div {...errorMsg}>{this.state.error}</div>
                    <div {...dialogWrapper}>
                        +375
                        <TextField floatingLabelText="Телефон "
                            style={stylesMaterial.phoneInput}
                            id="phone" 
                            onChange={(e, v) => this.handleChange(e, v)}
                        /><br />
                    </div>
                </Dialog>
            </header>
        );
    }
}

const contactsStyles = css({
    marginLeft: '-65px',
    zIndex: '1',
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
        '@media only screen and (max-width: 700px)': {
            fontSize: '1em'
        },
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

const stylesMaterial = {
    bigInput: {
        width: '400px'
    },
    phoneInput: {
        width: '350px',
        marginLeft: '10px'
    }
};

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
        zIndex: '0'
    },
    ' .left-tree': {
        position: 'absolute'
    },
    ' .slogan': {
        fontSize: '35px',
        fontWeight: '900',
        '@media only screen and (max-width: 700px)': {
            display: 'none'
        }
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
    '@media only screen and (max-width: 700px)': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '-35px'
    },
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

const dialogWrapper = css({
    margin: 'auto',
    width: '400px'
});

const errorMsg = css({
    color: '#B00020',
    margin: 'auto',
    width: '300px'
});

export default Header;