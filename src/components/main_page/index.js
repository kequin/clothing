import React from 'react';
import style from './style.module.scss';

const Main = () => {

    return (
        <React.Fragment>
            <div className={style.body}>
                <ul>
                    <li><a href="/#">CANVAS</a></li>
                    <li><a href="/#">T-SHIRT</a></li>
                    <li><a href="/#">CUT-SEW</a></li>
                    <li><a href="/#">SUBLIMATION</a></li>
                    <li><a href="/#">STOCK-PRODUCT</a></li>
                    <li><a href="/#">CUSTOM</a></li>
                    <li><a href="/#">JEWELRY</a></li>
                    <li><a href="/#">STICKER</a></li>
                    <li><a href="/#">DRINKWARE</a></li>
                </ul>
            </div>
            <div className={style.under_body}>
                <p>There is only <span className={style.black}>black</span> and white. <span>The rest is shades</span></p>
            </div>
        </React.Fragment>
    )
}

export default Main;