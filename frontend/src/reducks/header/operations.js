import API from '../../API';
import { fetchHeaderAction } from './actions';

const api = new API();

export const fetchHeader = () => {
    return async dispatch => {
        return api
            .getHeader()
            .then(header => {
                dispatch(fetchHeaderAction(header));
            })
            .catch(error => {
                alert('Failed to connect API: /Headingdetails/');
            });
    };
};
