import React from 'react'
import classes from '../styles/Grid.module.scss'
import Item from './Item'


const Grid = (props) => {
    return (
        <div className={classes.container__grid}>
            {/* Display products here */}
            {props.data.map((data,index)=><Item key={index} item={data} />)}
        </div>
    )
}


export default Grid