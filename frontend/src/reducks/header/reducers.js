import * as Actions from './actions';
import initialState from '../store/initialState';

export const HeaderReducer = (state = initialState.header, action) => {
    switch (action.type) {
        case Actions.FETCH_HEADER:
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
};
