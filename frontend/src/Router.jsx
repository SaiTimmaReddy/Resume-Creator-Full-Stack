import React from 'react';
import { Route, Switch } from 'react-router';
import Resume from './containers/Resume';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Resume} />
            </Switch>
        </>
    );
};
export default Router;
