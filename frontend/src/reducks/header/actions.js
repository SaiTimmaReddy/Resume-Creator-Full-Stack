export const FETCH_HEADER = 'FETCH_HEADER';
export const fetchHeaderAction = header => {
    return {
        type: 'FETCH_HEADER',
        payload: header
    };
};
