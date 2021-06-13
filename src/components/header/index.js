import React from 'react';
import main_styles from './default.module.scss';
import { Link } from 'react-router-dom';
import Switch from './switch';
import classNames from 'classnames';

const Header = (props) => {
    const className = () => {
        if(props.menu) return classNames(main_styles.cross, main_styles.active);
        else return main_styles.cross;
    }
    return (
        <div className={main_styles.Main}>
            <div className={main_styles.Name}>
                <Link to = ''>Clo<span>the</span>s</Link>
            </div>
            <div className={main_styles.Panel}>
                <Switch theme={props.theme} changeTheme={props.changeTheme}/>
                <div className={main_styles.parent} onClick={props.changeMenu}>
                    <div className={className()}></div>
                </div>
            </div>
        </div>
    );
}
export default Header;