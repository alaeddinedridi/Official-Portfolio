import React from 'react'
import classes from '../styles/Card.module.scss'
import {gridItems} from '../data/projects'
import Item from './Item'


const Card = (props) => {
    const data = props.item

    return (
        <article className={classes.card}>
            <div className={classes.img_wrapper}>
                <img src={`${process.env.PUBLIC_URL}/images/${data.logo}`} alt="" className={classes.img}/>
            </div>
            <div className={classes.body}>
                <h3 className={classes.add_margin}>{data.degree ? data.degree:data.company}</h3>
                <div className={classes.add_margin}>{data.university ? data.university:data.tasks}</div>
                <div>{data.period}</div>
            </div>
        </article>
    )
}


export default Card