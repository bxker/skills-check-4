import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from '../src/Components/Login/Login';
import Dashboard from '../src/Components/Dashboard/Dashboard';
import Post from '../src/Components/Post/Post';
import AddPost from '../src/Components/AddPost/AddPost';

export default (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/post/:id" component={Post} />
        <Route path="/add" component={AddPost}/>
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }}/>
    </Switch>
)