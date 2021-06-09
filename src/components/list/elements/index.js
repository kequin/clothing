import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import question from './../../../imgs/question.jpg';
import { Link } from 'react-router-dom';

const Element = (props) => {
    const item = props.items;
    return (
        <Link to={`/products/${props.url}/${item.id}`}>
            <div className={style.wrapper}>
                <div className={style.imgs} style={{ backgroundImage: `url('${item.image}')` }}>
                </div>
                <div className={style.model}>
                    {item?.model}
                </div>
                <div className={style.brand}>
                    {item?.brand}
                </div>
            </div>
        </Link>
    )
}
export default Element;