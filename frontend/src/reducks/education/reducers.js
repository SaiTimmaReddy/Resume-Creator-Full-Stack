import * as Actions from './actions';
import initialState from '../store/initialState';

export const EducationReducer = (state = initialState.education, action) => {
    switch (action.type) {
        case Actions.FETCH_EDUCATION:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
};
