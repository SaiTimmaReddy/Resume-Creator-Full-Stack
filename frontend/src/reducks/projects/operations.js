import API from '../../API';
import { fetchProjectsAction } from './actions';

const api = new API();

export const fetchProjects = () => {
    return async dispatch => {
        return api
            .getProjects()
            .then(projects => {
                dispatch(fetchProjectsAction(projects));
            })
            .catch(error => {
                alert('Failed to connect API: /project details/');
            });
    };
};
