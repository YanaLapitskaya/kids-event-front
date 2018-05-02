import API from '../../API';
import Order from '../../models/Order';
import { ORDERS_GET, ORDER_EDIT, ORDER_ADD } from '../ActionTypes';

export function actionFetchOrders() {
    return (dispatch: any) => {
        API.get('/api/order/all').then((data: any) => {
            let orders = data.orders;
            orders = orders.map((ord: any) => {
                return new Order(ord.id, ord.dateOrder, ord.dateService, ord.price, ord.comments, ord.client_id, ord.Services, ord.status);
            });
            dispatch({
                type: ORDERS_GET,
                payload: orders
            });
        });
    };
}

export function actionEditOrder(editedOrder: Order) {
    return (dispatch: any) => {
        if (!editedOrder) { return; }

        API.post(`/api/order/${editedOrder.id}`, editedOrder)
            .then((res: any) => {
                if (res.status < 400) {
                    dispatch({
                        type: ORDER_EDIT,
                        payload: editedOrder
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

export function actionAddOrder(newOrder: Order) {
    return (dispatch: any) => {
        API.put('/api/order', newOrder)
            .then((res: any) => {
                if (res.status < 400) {
                    return res.json();
                } else {
                    throw {code: res.status.toString()};
                }
            })
            .then((data) => {
                let order = data.order;
                dispatch({
                    type: ORDER_ADD,
                    payload: order
                });
            })
            .catch((err: any) => {
                throw new Error(JSON.stringify(err.message || err));
            });
    };
}