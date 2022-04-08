export const FETCH_EDUCATION = 'FETCH_EDUCATION';
export const fetchEducationAction = education => {
    return {
        type: 'FETCH_EDUCATION',
        payload: education
    };
};
