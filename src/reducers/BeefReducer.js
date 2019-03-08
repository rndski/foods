import beef from '../data/BeefData'

const initialState = {beef}
  
  export default (state = initialState, action) => {
      let newState = {...state}
      console.log('in the reducer')
      console.log(initialState)
    switch(action.type){
      case 'SHOW_BEEF':
        return newState
      default:
        return newState
    }
  }