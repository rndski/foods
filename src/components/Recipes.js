import React, {Component} from 'react';
import RecipeCard from './RecipeCard';
////import beefData from '../data/BeefData'
///import chickenData from '../data/ChickenData'
import * as ChickenActions from '../actions/ChickenActions';
import * as BeefActions from '../actions/BeefActions';
import { connect } from 'react-redux'

/*const _state = {
    beef: beefData,
    chicken: chickenData
}*/

class Recipes extends Component {

    componentDidMount(){
        //this.getRecipes()
        this.props.showChicken();
        this.props.showBeef();
        console.log('in componentdid mount')
        console.log(this.props.chicken)
        
      }

    render() {
        console.log(this.props.beef);
        const allRecipes = this.props[this.props.type][this.props.type].hits.map((item, i) => {
            return (
                <RecipeCard key={i} item={item} />
              )
          })

        return (
            <div className="recipe-items">
               {allRecipes}
            </div>
        );
    }
}

function mapStateToProps(state, props){
    return {
      chicken: state.chicken,
      beef: state.beef
    }
  }
  
  export default connect(mapStateToProps, {
    showChicken: ChickenActions.showChicken,
    showBeef: BeefActions.showBeef
  })(Recipes)
