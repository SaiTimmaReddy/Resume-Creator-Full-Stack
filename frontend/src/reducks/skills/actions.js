export const FETCH_SKILLS = 'FETCH_SKILLS';
export const fetchSkillsAction = skills => {
    return {
        type: 'FETCH_SKILLS',
        payload: skills
    };
};
