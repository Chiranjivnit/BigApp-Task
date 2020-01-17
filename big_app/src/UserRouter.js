import React from 'react';
import UserProfile from './UserProfile';
import { Switch, HashRouter, Route } from "react-router-dom";

const UserRouter = () => {

    return (
        <HashRouter>
            <Switch>
                <Route exact path="/UserProfile" component={UserProfile} >
                    <UserProfile />
                </Route>
            </Switch>
        </HashRouter>

    )
}
export default UserRouter;