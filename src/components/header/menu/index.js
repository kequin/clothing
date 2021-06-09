import React from 'react';
import style from './styles.module.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className={style.body}>
            <ul>
                <li><Link to='/products/CANVAS'>CANVAS</Link></li>
                <li><Link to='/products/T-SHIRT'>T-SHIRT</Link></li>
                <li><Link to='/products/CUT-SEW'>CUT-SEW</Link></li>
                <li><Link to='/products/SUBLIMATION'>SUBLIMATION</Link></li>
                <li><Link to='/products/STOCK-PRODUCT'>STOCK-PRODUCT</Link></li>
                <li><Link to='/custom'>CUSTOM</Link></li>
                <li><Link to='/products/JEWELRY'>JEWELRY</Link></li>
                <li><Link to='/products/STICKER'>STICKER</Link></li>
                <li><Link to='/products/DRINKWARE'>DRINKWARE</Link></li>
            </ul>
        </div>
    )
}
export default Menu;