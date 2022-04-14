import * as Actions from './actions';
import initialState from '../store/initialState';

export const SkillsReducer = (state = initialState.skills, action) => {
    switch (action.type) {
        case Actions.FETCH_SKILLS:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
};
