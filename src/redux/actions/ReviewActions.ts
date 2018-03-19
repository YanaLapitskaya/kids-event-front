import API from '../../API';
import { REVIEWS_SET } from '../ActionTypes';
import Review from '../../models/Review';

export function actionFetchReviews() {
    return (dispatch: any) => {
        API.get('/api/review/all').then((data: any) => {
            let reviews = data.reviews;
            reviews = reviews.map((r: any) => {
                return new Review(r.id, r.name, r.text, r.photo);
            });
            dispatch({
                type: REVIEWS_SET,
                payload: reviews
            });
        });
    };
}