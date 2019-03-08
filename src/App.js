import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Recipes from './components/Recipes';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="App-header">
              <NavBar cnum="10" bnum="10" />;
            </header>
            <div className="content">
             <Switch>
                <Route path="/chicken" component={ () => (<Recipes type='chicken' />) } />
                <Route path="/beef" component={ () => (<Recipes type='beef' />) } />
                <Route path="/" component={Home}/>
             </Switch>

            </div>
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return {
    cart: state.cart,
    wishes: state.wishes
  }
}

export default connect(mapStateToProps)(App)

