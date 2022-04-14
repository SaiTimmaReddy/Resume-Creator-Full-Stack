import API from '../../API';
import { fetchSkillsAction } from './actions';

const api = new API();

export const fetchSkills = () => {
    return async dispatch => {
        return api
            .getSkills()
            .then(skills => {
                dispatch(fetchSkillsAction(skills));
            })
            .catch(error => {
                alert('Failed to connect API: /skills details/');
            });
    };
};
