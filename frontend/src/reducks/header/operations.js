import API from '../../API';
import { fetchEducationAction } from './actions';

const api = new API();

export const fetchEducation = () => {
    return async dispatch => {
        return api
            .getEducation()
            .then(education => {
                dispatch(fetchEducationAction(education));
            })
            .catch(error => {
                alert('Failed to connect API: /education details/');
            });
    };
};
