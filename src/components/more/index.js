import React, {useEffect, useState} from 'react';
import style from './style.module.scss';
import Data from './../../api.json';

const More = (props) => {
    const [object, setObject] = useState(null);
    const id = props.match.params.id;
    const res = Data.result;
    useEffect(() => {
        let obj = null;
        for(let i = 0; i < res.length; i++){
            if(res[i].id === Number(id)) {obj = res[i]}
        }
        setObject(obj);
    }, [])

    return (
        <div className={style.Parent}>
            <div className={style.imgs}>
                <img src={object.image}/>
            </div>
        </div>
    )
}

export default More;