import React,{useEffect, useState} from 'react'
import classes from '../styles/Item.module.scss'
import { Link } from 'react-router-dom';


const Item = (props) => {

    const [show,setShow]=useState(false)
    const [data,setData]=useState({})

    useEffect(() => {
        setData(props.item)
    })

   

    return (
        <article className={classes.product} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <Link target={data.link && "_blank"} to={data.link && data.link} style={{ textDecoration: 'none',color:'black' }}>
            <div><img src={`${process.env.PUBLIC_URL}/images/${data.thumbnail?data.thumbnail:data.image}`} className={classes.img} alt="" /></div>
            <h3 className={classes.title}>{data.name}</h3>
            {data.price && <div className={classes.description}>{data.description}</div>}
            {data.price && <div className={classes.price}>{data.price}</div>}
            </Link>
          
           
        </article>

    )
}


export default Item