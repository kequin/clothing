import React, { useState, useEffect } from 'react';
import Data from './../../api.json';
import Elements from './elements';
import style from './style.module.scss';

const List = (props) => {
    const [objects, setObjects] = useState(null);
    const [block, setBlock] = useState(false);
    let matchID = props.match.params.list;
    useEffect(() => {
        console.log(props.history);
        props.history.push(props.match.url)
        setBlock(false);
        const res = Data.result;
        let newArr = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i].type === matchID) {
                newArr.push(res[i])
            }
        }
        const Objects = newArr.map((items) => {
            return <Elements key={items.id} items={items} url={matchID}/>
        })
        setObjects(Objects);
    }, [matchID])
    return (
        <div className={style.Parent}>
            <div className={style.Child}>
                {objects}
            </div>
        </div>
    );
}
export default List;