import React, {Component} from 'react';
import RecipeCard from './RecipeCard';
import beefData from '../data/BeefData'
import chickenData from '../data/ChickenData'

const _state = {
    beef: beefData,
    chicken: chickenData
}

class Recipes extends Component {
    render() {
        console.log(this.props.type, _state[this.props.type].hits)
        const allRecipes = _state[this.props.type].hits.map((item, i) => {
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

export default Recipes;