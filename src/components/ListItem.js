import React from 'react';
import './ListItem.css';

export default function ListItem(props) {

    let price = '';
    if(props.price.listPrice === undefined) {
       
        price += props.price.saleability; 
    }
    else {
        price += '$' + props.price.listPrice.amount.toString()
    }
    return (
        <div className="list-item">
            <h2>{props.title}</h2>
            <p className='info'>Author:  {props.author.toString()}</p>
            <p className='info'>Price:  {price}</p>
            <img src={props.img} alt={props.author}/>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

ListItem.defaultProps = {
    title: '',
    author: '',
    price: '',
    img: '',
    desc: 'This book has no description provided.'
}