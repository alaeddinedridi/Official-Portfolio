import React,{useState} from 'react'
import classes from '../styles/Item.module.scss'
import { Link } from 'react-router-dom';


const Item = (props) => {
    const {_id,name,slug,images,thumbnail,price,brand,countInStock,description}=props.item;
    const [show,setShow]=useState(false)

    return (
        <article className={classes.product} onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            <Link to="" style={{ textDecoration: 'none',color:'black' }}>
            <div><img src={"/images/"+thumbnail} className={classes.img} alt="" /></div>
            <h3 className={classes.title}>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{price}</div>
            </Link>
          
           
        </article>

    )
}


export default Item