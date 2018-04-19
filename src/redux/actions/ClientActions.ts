import API from '../../API';
import { REVIEWS_SET, CLIENTS_GET, CLIENT_EDIT, CLIENT_DELETE, CLIENT_ADD } from '../ActionTypes';
import Review from '../../models/Review';
import Client from '../../models/Client';

export function actionFetchClients() {
    return (dispatch: any) => {
        API.get('/api/client/all').then((data: any) => {
            let clients = data.clients;
            clients = clients.map((cl: any) => {
                return new Client(cl.id, cl.name, cl.phone, cl.socials, cl.notes);
            });
            dispatch({
                type: CLIENTS_GET,
                payload: clients
            });
        });
    };
}

export function actionEditClient(editedClient: Client) {
    return (dispatch: any) => {
        if (!editedClient) { return; }

        API.post(`/api/client/${editedClient.id}`, editedClient)
            .then((res: any) => {
                if (res.status < 400) {
                    dispatch({
                        type: CLIENT_EDIT,
                        payload: editedClient
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

export function actionDeleteClient(id: number) {
    return (dispatch: any) => {
        API.delete(`/api/client/${id}`)
            .then((res: any) => {
                if (res.status < 400) {
                    console.log(id);
                    dispatch({
                        type: CLIENT_DELETE,
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

export function actionAddClient(newClient: Client) {
    return (dispatch) => {
        API.put('/api/client', newClient)
            .then((res: any) => {
                if (res.status < 400) {
                    return res.json();
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .then((data) => {
                let client = data.client;
                dispatch({
                    type: CLIENT_ADD,
                    payload: client
                });
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}   