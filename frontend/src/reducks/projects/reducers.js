import * as Actions from './actions';
import initialState from '../store/initialState';

export const ProjectsReducer = (state = initialState.projects, action) => {
    switch (action.type) {
        case Actions.FETCH_PROJECTS:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
};
