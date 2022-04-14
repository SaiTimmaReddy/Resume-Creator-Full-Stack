export const FETCH_PROJECTS = 'FETCH_PROJECTS';
export const fetchProjectsAction = projects => {
    return {
        type: 'FETCH_PROJECTS',
        payload: projects
    };
};
