import { createSelector } from 'reselect';

const EducationSelector = state => state.education;

export const getEducation = createSelector([EducationSelector], state => state.results);
