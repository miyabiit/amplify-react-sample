import React, { useState, useEffect, useReducer } from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import { createTodo } from './graphql/mutations';
import { onCreateTodo } from './graphql/subscriptions';
import {withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'

import './App.css';

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
  const [user] = useState(null);
  
  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateTodo)).subscribe({
      next: (eventData) => {
        const todo = eventData.value.data.onCreateTodo;
        dispatch({ type: SUBSCRIPTION, todo});
      }
    });
    
    return () => subscription.unsubscribe();
  }, []);
  
  return (
    <div className="App">
      <p>user: { user != null && user.username }</p>
      <button onClick={createNewTodo}>Add Todo, please.</button>
      <div>
        {state.todos.length > 0 ?
          state.todos.map((todo) => <p key={todo.id}>{todo.name} ({todo.createdAt})</p>):
          <p>Add some todos!</p>
        }
      </div>
      <AmplifySignOut/>
    </div>
  );
}

export default withAuthenticator(App);
