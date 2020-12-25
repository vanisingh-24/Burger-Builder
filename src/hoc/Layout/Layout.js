import React, { useState } from 'react';
import {connect} from 'react-redux';

import Aux from '../Auxiliary/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

//Stateless components or DUMB
const layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }

        return(
        <Aux>
            <Toolbar
              isAuth={props.isAuthenticated}
              drawerToggleClicked={sideDrawerToggleHandler} />
            <SideDrawer 
              isAuth={props.isAuthenticated}
              open={sideDrawerIsVisible}
              closed={sideDrawerClosedHandler} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
        )
    }

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);