import { createSelector } from 'reselect';

const SkillsSelector = state => state.skills;

export const getSkills = createSelector([SkillsSelector], state => state.results);
