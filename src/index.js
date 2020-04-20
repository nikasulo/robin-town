import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';
import './index.scss';

const saveStateToLocalStorage = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
};

const getStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    const parsedState = JSON.parse(serializedState);

    if (parsedState) {
      return parsedState;
    }

  } catch(error) {
    return null;
  }
}

const persistedState = getStateFromLocalStorage();

const store = createStore(
  rootReducer, 
  persistedState,
  applyMiddleware(
    thunk
  ),
)

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

store.subscribe(() => saveStateToLocalStorage(store.getState()));

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
