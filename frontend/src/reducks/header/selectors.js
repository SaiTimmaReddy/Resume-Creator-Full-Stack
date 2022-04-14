import { createSelector } from 'reselect';

const HeaderSelector = state => state.header;

export const getHeader = createSelector([HeaderSelector], state => state.results);
