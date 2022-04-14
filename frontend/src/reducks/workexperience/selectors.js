import { createSelector } from 'reselect';

const WorkExperienceSelector = state => state.workexperiences;

export const getWorkExperience = createSelector([WorkExperienceSelector], state => state.results);
