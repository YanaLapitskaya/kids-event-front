import API from '../../API';
import Service from '../../models/Service';
import { SERVICES_SET } from '../ActionTypes';

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