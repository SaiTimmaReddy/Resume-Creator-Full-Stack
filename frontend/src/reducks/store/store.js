import { createStore as reduxCreateStore, combineReducers, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { PostsReducer } from '../posts/reducers';
import { EducationReducer } from '../education/reducers';
import { HeaderReducer } from '../header/reducers';
import { SkillsReducer } from '../skills/reducers';
import { ProjectsReducer } from '../projects/reducers';
import { WorkExperienceReducer } from '../workexperience/reducers';
export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            router: connectRouter(history),
            posts: PostsReducer,
            education: EducationReducer,
            header: HeaderReducer,
            skills: SkillsReducer,
            projects: ProjectsReducer,
            workexperiences: WorkExperienceReducer
        }),
        compose(
            applyMiddleware(routerMiddleware(history), thunk)
            // DEBUG MODE
            // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
}
