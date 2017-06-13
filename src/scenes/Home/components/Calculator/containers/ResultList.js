import { connect } from 'react-redux'
import { calcPlan } from '../actions'
import Result from '../components/Result'

const mapDispatchToProps = (dispatch) => {
  return {
    calcTax: () => {
      dispatch(calcPlan())
    }
  }
}

const ResultList = connect(
  mapDispatchToProps
)(Result)

export default ResultList