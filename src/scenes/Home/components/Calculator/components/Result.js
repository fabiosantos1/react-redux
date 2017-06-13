import React, { PropTypes } from 'react';

//import plans from '../data/plans.json'

const Result = () => (
   <ul>
    {/*plans.data.map(plan =>
      <li>{plan.name} - {plan.value}</li>
    )*/}
  </ul>
)

Result.propTypes = {
  plans: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  }).isRequired).isRequired 
}

export default Result 