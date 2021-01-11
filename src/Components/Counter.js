import React from 'react'
import style from './Counter.module.css'

const Counter = ({count, changeCount}) => {
    const changeValue = (e) => {
        changeCount(e.currentTarget.value)
    }
    return (
        <div className={style.counter}>
            <input value={count} onChange={changeValue}/>
            <span className={style.up} onClick={()=> {changeCount(count+1)}}>
                <span className={style.sprite}>{''}</span>
            </span>
            <span className={style.down} onClick={()=> {count>1&&changeCount(count-1)}}>
                <span className={style.sprite}>{''}</span>
            </span>
        </div>
    )
}

export default Counter
