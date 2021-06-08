import React, {useEffect, useState} from 'react';
import style from './style.module.scss';
import Data from './../../api.json';
import Info from './info';

const More = (props) => {
    const [returns, SetReturns] = useState(null); 
    const id = props.match.params.id
    const res = Data.result;
    useEffect(() => {
        props.history.push(props.match.url)
        console.log(props.history);
        let obj = null;
        for(let i = 0; i < res.length; i++){
            if(res[i].id === Number(id)) {obj = res[i]}
        }
        SetReturns(<Info object={obj}/>)
    }, [])  

    return (
        <div className={style.Parent}> 
            {returns}
        </div>
    )
}

export default More;