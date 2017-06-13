import React from 'react'
import { Control,Form, actions } from 'react-redux-form'
import { calcPlan } from '../actions'

import calls from '../data/calls.json'

class FormCalc extends React.Component { 
  
  handleSubmit(formData) {
    this.props.dispatch(calcPlan(formData));
  }

  render() {
    return (
      <Form model="data" onSubmit={ (formData) => this.handleSubmit(formData) }>
        <label>Origem:</label>
        <Control.select model=".origin">
          <option>Selecionar</option>
          {
            calls.data.map(function(call) {
              return <option value={call.id}>{call.name}</option>;
            })
          }
        </Control.select>
        <Control.select model=".target">
          <option>Selecionar</option>
          {
            calls.data.map(function(call) {
              return <option value={call.id}>{call.name}</option>;
            })
          }
        </Control.select>
        <label>Tempo:</label>
        <Control.text model=".time" />
        <button>Calcular</button>
      </Form>
    );
  }
}
    

export default FormCalc;