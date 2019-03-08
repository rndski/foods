import chicken from '../data/ChickenData'

const initialState = {chicken}
  
  export default (state = initialState, action) => {
      let newState = {...state}
      console.log('in the reducer')
      console.log(initialState)
    switch(action.type){
      case 'SHOW_CHICKEN':
        return newState
      default:
        return newState
    }
  }