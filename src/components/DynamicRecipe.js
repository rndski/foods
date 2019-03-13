import React, {Component} from 'react';
import RecipeCard from './RecipeCard';
import * as ChickenActions from '../actions/ChickenActions';
import * as BeefActions from '../actions/BeefActions';
import { connect } from 'react-redux'

class DynamicRecipe extends Component {

    componentDidMount(){
        //this.getRecipes()
        console.log('in componentdid mount')
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
        protein: state.protein,
        beef: state.beef
    }
  }
  
  export default connect(mapStateToProps, {
    showChicken: ChickenActions.showChicken,
    showBeef: BeefActions.showBeef
  })(DynamicRecipe)
