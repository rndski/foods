import React from 'react';
import { withRouter } from 'react-router-dom';
import NavigationBar from 'apollo-react-next/components/NavigationBar';


const NavBar = ( {cnum, bnum, history}) => (
  <NavigationBar
    menuItems={[
      { text: 'Home', onClick: () => history.push('/') },
      { text: `Chicken (${cnum})`, onClick: () => history.push('/chicken') },
      { text: `Beef (${bnum})`, onClick: () => history.push('/beef') },
      /*{ text: `Recipes (${bnum})`, onClick: () => history.push('/recipes') },*/
    ]}
  />
);

export default withRouter(NavBar);
