import React from 'react';
import Tips from './tips';
import style from './styles.module.scss';
import Futter from './futter'

const Els = () => {
    return( 
        <React.Fragment>
            <div className={style.body}>
                <Tips />
            </div>
            <div className={style.under_body}>
                <p>There is only <span className={style.black}>black</span> and white. <span>The rest is shades</span></p>
            </div>
            <div>
                <Futter />
            </div>
        </React.Fragment>
    )
}
export default Els;