import axios from 'axios';
const LOGIN_USER_KEY = 'WD_FORUM_LOGIN_USER_KEY';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'http://127.0.0.1:8000';
}

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

/**
 * Add requireToken: true in request config, for API that required Authorization token
 */
api.interceptors.request.use(
    config => {
        if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
            config.headers.common['Authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token;
        }

        return config;
    },
    err => {
        console.error(err);
    }
);

export default class API {
    // getPosts = params => {
    //     return api
    //         .get('/posts/', { params })
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => {
    //             throw new Error(error);
    //         });
    // };
    // addPost = postBody => {
    //     const formData = new FormData();

    //     for (const key in postBody) {
    //         formData.append(key, postBody[key]);
    //     }

    //     return api
    //         .post('/posts/add/', formData)
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => {
    //             throw new Error(error);
    //         });
    // };
    // deletePost = id => {
    //     return api.delete(`/posts/delete/${id}/`).catch(error => {
    //         throw new Error(error);
    //     });
    // };

    /*****************************************
     * API FOR THE EDUCATION COMPONENT
     * ******************************************************* */

    getEducation = async () => {
        let url = '/education/';
        const education = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return education;
    };

    /*****************************************
     * API FOR THE HEADER COMPONENT
     * ******************************************************* */

    getHeader = async () => {
        let url = '/header/';
        const header = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return header;
    };

    /*****************************************
     * API FOR THE PROJECTS COMPONENT
     * ******************************************************* */
    getProjects = async () => {
        let url = '/projects/';
        const projects = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return projects;
    };
    /*****************************************
     * API FOR THE SKILLS COMPONENT
     * ******************************************************* */

    getSkills = async () => {
        let url = '/skills/';
        const skills = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return skills;
    };

    /*****************************************
     * API FOR THE WORKEXPERIENCE COMPONENT
     * ******************************************************* */

    getWorkExperience = async () => {
        let url = '/workexperience/';
        const experience = await api
            .get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return experience;
    };
}
