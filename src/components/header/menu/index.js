import React from 'react';
import style from './styles.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className={style.body}>
            <ul>
                <li><Link to='/CANVAS'>CANVAS</Link></li>
                <li><Link to='/T-SHIRT'>T-SHIRT</Link></li>
                <li><Link to='/CUT-SEW'>CUT-SEW</Link></li>
                <li><Link to='/SUBLIMATION'>SUBLIMATION</Link></li>
                <li><Link to='/STOCK-PRODUCT'>STOCK-PRODUCT</Link></li>
                <li><Link to='/CUSTOM'>CUSTOM</Link></li>
                <li><Link to='/JEWELRY'>JEWELRY</Link></li>
                <li><Link to='/STICKER'>STICKER</Link></li>
                <li><Link to='/DRINKWARE'>DRINKWARE</Link></li>
            </ul>
        </div>
    )
}
export default Menu;