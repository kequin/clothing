import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import question from './../../../imgs/question.jpg';
import classNames from 'classnames';
import { Redirect } from 'react-router';

const Element = (props) => {
    const [animation, setAnimation] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const item = props.items;
    const img = item.image ? `url('${item.image}')` : `url('${question}')`;
    useEffect(() => { changeAnimation() }, [animation])
    const changeAnimation = () => {
        if (animation) return classNames(style.wrapper, style.active);
        if (!animation) return style.wrapper;
    }
    const check = () => {
        props.changeBlock();
        if (!animation) {setAnimation(true); }
        setTimeout(() => setRedirect(true), 2000)
    }
    if(redirect) return <Redirect to={`/${props.url}/${item.id}`}/>
    return (
        <div className={changeAnimation()}>
            <div className={style.imgs} style={{ backgroundImage: img }}>
            </div>
            <div className={style.model}>
                {item?.model}
            </div>
            <div className={style.brand}>
                {item?.brand}
            </div>
            <div onClick={check} className={style.click}>

            </div>
        </div>
    )
}
export default Element;