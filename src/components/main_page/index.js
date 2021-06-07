import React from 'react';
import style from './style.module.scss';

const Main = () => {
    return (
        <React.Fragment>
            <div className={style.body}>

            </div>
            <div className={style.under_body}>
                <p>There is only <span className={style.black}>black</span> and white. <span>The rest is shades</span></p>
            </div>
        </React.Fragment>
    )
}

export default Main;