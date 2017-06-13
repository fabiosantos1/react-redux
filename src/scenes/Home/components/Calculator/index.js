import React from 'react';

import FormCalc from './components/FormCalc'
import Result from './containers/ResultList'
//import { actions } from './services'

const Calculator = () => (
  <div>
    <FormCalc />
    <Result />
  </div>
)

export default Calculator