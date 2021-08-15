import React, { useState, useEffect} from 'react';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react';
import {Auth} from 'aws-amplify';
import {Grid} from '@material-ui/core';
import Header from './components/Header';
import Top from './components/pages/Top';
import Hooks from './components/pages/Hooks';
import NotFound from './components/pages/NotFound';

import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

import './App.css';

function App() {
  const [username, setUsername] = useState();
  useEffect(() => {
    // ログインユーザー名の取得
    Auth.currentAuthenticatedUser().then(user => {
      setUsername(user.username);
    }).catch(err => {console.log(err)});
  }, []);

  return (
    <Grid container direction="column">
      <Header />
			<h3>user:{username}</h3>
			<Router>
				<ul>
					<li><NavLink activeClassName="active" exact to="/">HOME</NavLink></li>
					<li><NavLink activeClassName="active" to="/hooks">Hooks study</NavLink></li>
				</ul>
				<Switch>
					<Route exact path="/" component={Top}/>
					<Route Path="/hooks" component={Hooks}/>
					<Route component={NotFound}/>
				</Switch>
			</Router>
      <AmplifySignOut/>	  
    </Grid>
  )
}

export default withAuthenticator(App);
