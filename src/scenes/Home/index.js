import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { combineForms } from 'react-redux-form'

import Calculator from './components/Calculator'
import plans from './data/plans.json'

const initialData = { 
  time: '',
  origin: '',
  target: ''
};

const store = createStore(
  combineForms({
    data: initialData,
    plans
  }),
);

/*const store = createStore(combineReducers({
  deep: combineForms({
    user: initialUserState,
    goat: initialGoatState,
  }, 'deep'),
}));*/

class Home extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Calculator />
      </Provider>
    );
  }
}

export default Home;