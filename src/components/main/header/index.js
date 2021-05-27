import React, {useState} from 'react';
import style from './styles.module.scss';
import classNames from 'classnames';
import search from './../../../imgs/loupe.png';

const Header = (props) => {
    return (
        <div className = {style.Main}>
            <div className={style.Name}>
                <p>
                    Clo<span>the</span>s
                </p>
            </div>
            <div className={style.Panel}>
                <div className={style.Switch}>
                    <p>
                        Theme {props.them === 'light' ? 'light' : "dark" }
                    </p>
                    <label className={style.switch}>
                        <input type="checkbox" onChange={() => props.changeTheme()}></input>
                        <span className={classNames(style.slider, style.round)}></span>
                    </label>
                </div>
                <form className={style.input} onSubmit={(e) => { e.preventDefault(); }}>
                    <input type="text" placeholder = "Write model name"></input>
                    <button onClick = {() => console.log('sending...')}>
                        <img src={search} alt="search"></img>
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Header;