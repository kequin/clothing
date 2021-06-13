import React, {useState} from 'react';
import style from './styles.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const Menu = ({menu, changeMenu}) => {
    const Class = () => {
        if(menu) return classNames(style.body, style.active)
        else return style.body
    }
    const Back = () => {
        if(menu) return style.bckActive
        else return style.bkcNotActive
    }
    return (
        <div className={Class()}>
            <div className={Back()}>
            </div>
            <ul>
                <li><Link onClick={changeMenu} to='/products/CANVAS'>CANVAS</Link></li>
                <li><Link onClick={changeMenu} to='/products/T-SHIRT'>T-SHIRT</Link></li>
                <li><Link onClick={changeMenu} to='/products/CUT-SEW'>CUT-SEW</Link></li>
                <li><Link onClick={changeMenu} to='/products/SUBLIMATION'>SUBLIMATION</Link></li>
                <li><Link onClick={changeMenu} to='/products/STOCK-PRODUCT'>STOCK-PRODUCT</Link></li>
                <li><Link onClick={changeMenu} to='/custom'>CUSTOM</Link></li> 
                <li><Link onClick={changeMenu} to='/products/JEWELRY'>JEWELRY</Link></li>
                <li><Link onClick={changeMenu} to='/products/STICKER'>STICKER</Link></li>
                <li><Link onClick={changeMenu} to='/products/DRINKWARE'>DRINKWARE</Link></li>
            </ul>
        </div>
    )
}
export default Menu;