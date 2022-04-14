import { createSelector } from 'reselect';

const ProjectsSelector = state => state.projects;

export const getProjects = createSelector([ProjectsSelector], state => state.results);
