import React, { useState, useEffect } from 'react';
import Data from './../../api.json';
import Elements from './elements';
import style from './style.module.scss';

const List = (props) => {
    const [objects, setObjects] = useState(null);
    const [block, setBlock] = useState(false);
    let matchID = props.match.params.list;
    useEffect(() => {
        setBlock(false);
        const res = Data.result;
        let newArr = [];
        for (let i = 0; i < res.length; i++) {
            if (res[i].type === matchID) {
                newArr.push(res[i])
            }
        }
        const Objects = newArr.map((items) => {
            return <Elements 
                    changeBlock={() => setBlock(true)}
                    block={block} key={items.id} items={items}
                    url={matchID}
                    />
        })
        setObjects(Objects);
    }, [matchID])
    const changeActive = () => {
        if(block) return style.Barrier
        if(!block) return style.notBarrier
    }
    return (
        <div className={style.Parent}>
            <div className={style.Child}>
                {objects}
            </div>
            <div className={changeActive()}></div>
        </div>
    );
}
export default List;