import React, { useState, useEffect, useReducer } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createTodo } from './graphql/mutations';
import { onCreateTodo } from './graphql/subscriptions';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import {Auth} from 'aws-amplify';

import './App.css';
import  { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';

const QUERY = 'QUERY';
const SUBSCRIPTION = 'SUBSCRIPTION';

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case QUERY:
      return {...state, todos: action.todos};
    case SUBSCRIPTION:
      return {...state, todos:[...state.todos, action.todo]};
    default:
      return state;
  }
}

async function createNewTodo() {
  const todo = { name: "Todo " + Math.floor(Math.random() * 10)};
  await API.graphql(graphqlOperation(createTodo, {input: todo}));
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [username, setUsername] = useState();
  
  useEffect(() => {
    // ログインユーザー名の取得
    Auth.currentAuthenticatedUser().then(user => {
      setUsername(user.username);
    }).catch(err => {console.log(err)});
    
    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        const todo = eventData.value.data.onCreateTodo;
        dispatch({ type: SUBSCRIPTION, todo});
      }
    });
    
    return () => subscription.unsubscribe();
  }, []);
  
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
      <Grid sm={2} />
      <Grid sm={8}>
        <p>user: {username}</p>
        <button onClick={createNewTodo}>Add Todo, please.</button>
        <div>
          {state.todos.length > 0 ?
            state.todos.map((todo) => <p key={todo.id}>{todo.name} ({todo.createdAt})</p>):
            <p>Add some todos!</p>
          }
        </div>
      </Grid>
      <Grid sm={2} />
      </Grid>
      <Grid item container>
        <Grid sm={1} />
        <Grid xs={12} sm={10}>
          <Content />
        </Grid>
        <Grid sm={1} />
      </Grid>
        <AmplifySignOut/>
    </Grid>
  );
}

export default withAuthenticator(App);
