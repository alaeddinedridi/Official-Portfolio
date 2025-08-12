import React from 'react'
import classes from '../styles/Grid.module.scss'
import {projects} from '../data/projects'
import Item from './Item'


const Grid = () => {
    return (
        <div className={classes.container__grid}>
            {/* Display products here */}
            {projects.map((project,index)=><Item key={index} item={project} />)}
        </div>
    )
}


export default Grid