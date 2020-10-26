import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import Frame from './frame/frame'
import { BrowserRouter as Router } from 'react-router-dom';
let store = createStore(rootReducer, applyMiddleware(thunk));
const unsubscribe = store.subscribe(() => console.log("subscribe: ",store.getState()))
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Frame />
      </Provider>
    </Router>
  );
}

export default App;
