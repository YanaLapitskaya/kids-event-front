import API from '../../API';
import { USER_LOGIN } from '../ActionTypes';

export function actionLogin(googleRes: any) {
    return (dispatch: any) => {
        const body = {googleRes: googleRes};
        API.post('/api/login', body).then((data: any) => {
            if (data.status < 400) {
                dispatch({
                    type: USER_LOGIN,
                    payload: googleRes.profileObj
                });
            }
        });
    };
}