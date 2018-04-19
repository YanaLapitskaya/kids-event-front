import API from '../../API';
import Order from '../../models/Order';
import { ORDERS_GET } from '../ActionTypes';

export function actionFetchOrders() {
    return (dispatch: any) => {
        API.get('/api/order/all').then((data: any) => {
            let orders = data.orders;
            orders = orders.map((ord: any) => {
                return new Order(ord.id, ord.date, ord.price, ord.comments, ord.client_id, ord.Services);
            });
            dispatch({
                type: ORDERS_GET,
                payload: orders
            });
        });
    };
}