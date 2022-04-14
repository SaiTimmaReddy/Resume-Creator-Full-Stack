import * as Actions from './actions';
import initialState from '../store/initialState';

export const WorkExperienceReducer = (state = initialState.workexperiences, action) => {
    switch (action.type) {
        case Actions.FETCH_WORKEXPERIENCE:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
};
