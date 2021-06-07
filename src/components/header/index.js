import React from 'react';
import main_styles from './default.module.scss';
import { Link } from 'react-router-dom';
import Menu from './menu';
import Switch from './switch';
import img from './../../imgs/loupe.png';

const Header = (props) => {
    return (
        <div className={main_styles.Main}>
            <div className={main_styles.Name}>
                <Link to = ''>Clo<span>the</span>s</Link>
            </div>
            <div className={main_styles.Panel}>
                <Switch theme={props.theme} changeTheme={props.changeTheme}/>
                <form className={main_styles.input} onSubmit={(e) => { e.preventDefault(); }}>
                    <input type="text" placeholder="Write model name"></input>
                    <button onClick={() => console.log('sending...')}>
                        <img src={img} alt="search"></img>
                    </button>
                </form>
            </div>
            <Menu />
        </div>
    );
}
export default Header;