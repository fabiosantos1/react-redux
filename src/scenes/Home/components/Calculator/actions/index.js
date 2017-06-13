export const calcPlan = (data) => {
  return {
    type: 'CALC_PLAN',
    data
  }
}

export const clearPlan = () => {
  return {
    type: 'CLEAR_PLAN'
  }
}