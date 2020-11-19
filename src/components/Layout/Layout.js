import React from 'react';
import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';

//Stateless components or DUMB
const layout = (props) => (
    <Aux>
       <div>Toolbar, SideDrawer, BackDrop</div>
       <main className={classes.Content}>
           {props.children}
       </main>
   </Aux>
);

export default layout;