import * as React from 'react';
import SideMenu from '../../partials/SideMenu';
import ServiceCard from './ServiceCard';
import Service from '../../../models/Service';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { css } from 'glamor';
import { HOST } from '../../../Constants';
import RaisedButton from 'material-ui/RaisedButton';
import Clear from 'material-ui/svg-icons/content/clear';
import ReactDOM from 'react-dom';

class ServicesList extends React.Component<any, any> {
    state = {
        service: new Service(),
        open: false,
        files: [],
        images: []
    };

    imageContainer: HTMLInputElement = undefined;  

    componentWillMount() {
        this.props.fetchServices();
    }
    
    handleChange = (event, newValue) => {
        let service = this.state.service;
        service[event.target.id] = newValue;
        this.setState({
            service: service
        });
    }

    handleOpen = (service?: Service) => {
        if (service) {
            this.setState({
                service: service,
                open: true
            });
        } else {
            this.setState({
                open: true
            });
        }
    }

    handleClose = (e) => {
        if (e.target.innerText === 'СОХРАНИТЬ') {
            if (!this.state.service.id) {
                this.props.addService(this.state.service, this.state.files);
            } else {
                this.props.editService(this.state.service, this.state.files);
            }
            if (this.state.images.length !== 0) {
                window.location.reload();
            }
        } else if (e.target.innerText === 'УДАЛИТЬ УСЛУГУ') {
            this.props.deleteService(this.state.service.id);
        }

        this.setState({
            open: false,
            service: new Service(),
            files: [],
            images: []
        });
    }

    handleImageAdd = (files) => {
        if (files) {
            this.setState({
                files: [...this.state.files, files[0]]
            });
            let reader = new FileReader();
            
            reader.onload = () => {
                this.setState({
                    images: [...this.state.images, reader.result]
                });
            };
            reader.readAsDataURL(files[0]);
        }
    }

    handleDeleteImage = (e) => {
        const src = e.currentTarget.parentElement.childNodes[1].src;
        const regExp = new RegExp(HOST + '(.*)');
        const isTemp = !src.match(regExp);

        if (isTemp) {
            const tempSrc = src;
            const index =  this.state.images.indexOf(src);
            let newImages;
            newImages = this.state.images.slice(0, index).concat(this.state.images.slice(index + 1));
            this.setState({
                images: newImages
            });
        } else {
            const constSrc = src.match(regExp)[1].toString();
            const images = this.state.service.photos;
            const index = images.indexOf(constSrc);
            let newImages = images.slice(0, index).concat(images.slice(index + 1));
            const newService = this.state.service;
            newService.photos = newImages; 
            this.props.editService(newService, this.state.files);
        }
    }

    render() {
        const actions = [
            (
                <FlatButton
                    label="Удалить услугу"
                    key="delete"
                    style={styles.deleteButton}
                    secondary={true}
                    onClick={(e) => this.handleClose(e)}
                />
            ),
            (
                <FlatButton
                    label="Отмена"
                    key="cancel"
                    primary={true}
                    onClick={(e) => this.handleClose(e)}
                />
            ),
            (
                <FlatButton
                    label="Сохранить"
                    key="ok"
                    primary={true}
                    onClick={(e) => this.handleClose(e)}
                />
            )
        ];
        return (
            <div>
                <SideMenu {...this.props}/>
                <div {...wrapper}>
                    { 
                        this.props.services.map((service: Service, ind: number) => {
                             return <ServiceCard services={this.props.services} handleOpen={this.handleOpen} service={service} key={ind} />;
                        })
                    }
                </div>
                <FloatingActionButton style={{margin: '0px 50px'}} onClick={() => this.handleOpen()}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    <div {...contentWrapper}>
                        <div {...fromWrapper}>
                            <TextField 
                                floatingLabelText="Название"
                                style={styles.textField}
                                defaultValue={this.state.service.title}
                                id="title" onChange={(e, v) => this.handleChange(e, v)}
                            /><br />
                            <TextField
                                floatingLabelText="Описание"
                                style={styles.textField}
                                defaultValue={this.state.service.description}
                                multiLine={true}
                                rows={3}
                                rowsMax={5}
                                id="description" onChange={(e, v) => this.handleChange(e, v)}
                            /><br />
                            <TextField 
                                floatingLabelText="Цена"
                                style={styles.textField}
                                defaultValue={this.state.service.price}
                                id="price" onChange={(e, v) => this.handleChange(e, v)}
                            /><br />
                        </div>
                        <div {...imagesWrapper}>
                            <div ref={(node: any) => { this.imageContainer = node; }}>
                                { this.state.service.photos ?
                                    this.state.service.photos.map((photo: string, key: number) => {
                                        return (
                                            <div {...imageWrapper} key={key}>
                                                <Clear onClick={e => this.handleDeleteImage(e)} style={styles.clearBtn}/>
                                                <img src={`${HOST}${photo}`} {...image} alt="service-image"/>
                                            </div>
                                        );
                                    }) : null
                                }
                                { 
                                    this.state.images.map((imgSrc: string, key: number) => {
                                        return (
                                            <div {...imageWrapper} key={key}>
                                                <Clear onClick={e => this.handleDeleteImage(e)} style={styles.clearBtn}/>
                                                <img src={imgSrc} {...image} alt="service-image"/>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <RaisedButton primary={true} style={styles.addPhotoBtn}>
                                Выберите фотографию
                                <input {...input} id="uploadFile" type="file" onChange={(e) => {this.handleImageAdd(e.target.files); }}/>
                            </RaisedButton>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

const input = css({
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    width: '100%',
    opacity: '0'
});

const wrapper = css({
    paddingTop: '25px'
});

const contentWrapper = css({
    display: 'flex'
});

const image = css({
    width: '100%' 
});

const styles = {
    textField: {
        width: '100%'
    },
    deleteButton: {
        position: 'absolute',
        left: '0'
    },
    addPhotoBtn: {
        margin: '10%',
        width: '80%',
        boxSizing: 'border-box'
    },
    clearBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: 'black'
    }
};

const fromWrapper = css({
    width: '50%'
});

const imagesWrapper = css({
    width: '50%',
    padding: '5%'
});

const imageWrapper = css({
    position: 'relative',
    width: '33.3%',
    display: 'inline-block'
});

export default ServicesList;