import API from '../../API';
import Service from '../../models/Service';
import { SERVICES_SET, SERVICE_EDIT, SERVICE_DELETE, SERVICE_ADD } from '../ActionTypes';
import { HOST } from '../../Constants';

export function actionFetchServices() {
    return (dispatch: any) => {
        API.get('/api/service/all').then((data: any) => {
            let services = data.services;
            services = services.map((s: any) => {
                return new Service(s.id, s.photos, s.title, s.description, s.price);
            });
            dispatch({
                type: SERVICES_SET,
                payload: services
            });
        });
    };
}

export function actionEditService(editedService: Service, files: Array<File>) {
    return (dispatch: any) => {
        if (!editedService) { return; }

        let formData = new FormData();
        formData.append('title', editedService.title);
        formData.append('description', editedService.description);
        if (editedService.photos) {
            editedService.photos.forEach((photo) => {
                formData.append('photos[]', photo);
            });
        }
        if (editedService.price) {
            formData.append('price', editedService.price.toString());
        }
        if (files) {
            files.forEach((file) => {
                formData.append('files[]', file);
            });
        }
        fetch(`${HOST}/api/service/${editedService.id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, */*'
            },
            body: formData
        }) 
            .then((res: any) => {
                if (res.status < 400) {
                    dispatch({
                        type: SERVICE_EDIT,
                        payload: editedService
                    });
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}

export function actionDeleteService(id: number) {
    return (dispatch: any) => {
        API.delete(`/api/service/${id}`)
            .then((res: any) => {
                if (res.status < 400) {
                    dispatch({
                        type: SERVICE_DELETE,
                        payload: id
                    });
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}

export function actionAddService(newService: Service, files: Array<File>) {
    return (dispatch) => {
        let formData = new FormData();
        formData.append('title', newService.title);
        formData.append('description', newService.description);
        if (newService.photos) {
            newService.photos.forEach((photo) => {
                formData.append('photos[]', photo);
            });
        }
        if (newService.price) {
            formData.append('price', newService.price.toString());
        }
        if (files) {
            files.forEach((file) => {
                formData.append('files[]', file);
            });
        }
        fetch(`${HOST}/api/service/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, */*'
            },
            body: formData
        }) 
            .then((res: any) => {
                if (res.status < 400) {
                    return res.json();
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .then((data) => {
                let service = data.service;
                dispatch({
                    type: SERVICE_ADD,
                    payload: service
                });
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}