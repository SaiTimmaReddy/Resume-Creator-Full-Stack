import API from '../../API';
import { fetchWorkExperienceAction } from './actions';

const api = new API();

export const fetchWorkExperience = () => {
    return async dispatch => {
        return api
            .getWorkExperience()
            .then(workexperiences => {
                dispatch(fetchWorkExperienceAction(workexperiences));
            })
            .catch(error => {
                alert('Failed to connect API: /workexperience details/');
            });
    };
};
