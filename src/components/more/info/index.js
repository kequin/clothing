import React from 'react';
import style from './style.module.scss';
const Info = ({object}) => {
    const discount = () => {
        if(object.is_discontinued) return <div className={style.discount}>has a discount</div>
        if(!object.is_discontinued) return null;
    }
    return(
        <div className={style.Parent}>
            <div className={style.Imgs}>
                <img src={object.image} alt='img'/>
            </div>
            <div className={style.Info}>
                <div className={style.head}>
                    <h1>
                        {object.model}
                        {console.log(object)}
                    </h1>
                    {discount()}
                </div>
                <h2 className={style.brand}>
                    {object.brand}
                </h2>
                <p>
                    {object.description}
                </p>
                <h2 className={style.money}>
                    {object.variant_count}  {object.currency}
                </h2>
            </div>
        </div>
    )
}

export default Info;