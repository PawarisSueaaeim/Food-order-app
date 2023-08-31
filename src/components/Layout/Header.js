import React, {Fragment} from 'react';
import classes from './Header.module.css';

import imageMeal from '../../asset/meals.jpg'

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>PleumMeal</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={imageMeal} alt="The meal"></img>
        </div>
    </Fragment>
};

export default Header 