import * as Actions from './actions';
import initialState from '../store/initialState';

export const EducationReducer = (state = initialState.items, action) => {
    switch (action.type) {
        case Actions.FETCH_EDUCATION:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};
