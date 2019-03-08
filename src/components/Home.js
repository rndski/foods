import React, { Component } from 'react';
import Typography from 'apollo-react-next/components/Typography';

class Home extends Component {
 
 render(){
   return(
       <div className="app">
         <div className="landing">
             <div className="food-home-photo"></div>
             <Typography variant="h1" className="title">Live well!</Typography>
         </div>
       </div>
     )
 }
}

export default Home