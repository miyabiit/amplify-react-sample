
import React, { useState, useEffect} from 'react';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import {Auth} from 'aws-amplify';
import {Grid} from '@material-ui/core';
import Header from './components/Header';
import Top from './components/pages/Top';
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
      <Grid item>
        <Header />
	<h3>user:{username}</h3>
      </Grid>
      <Top/>
      <AmplifySignOut/>	  
    </Grid>
  )
}

export default withAuthenticator(App);
