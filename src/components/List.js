import React from 'react';
import ListItem from './ListItem'

export default function List(props) {
    //need the author, title, price, image, and desc.
    //author: data.items[0].volumeInfo.authors.toString()
    //title:  data.items[0].volumeInfo.title
    //price:  data.items[0].saleInfo.listPrice.amount.toString()
    //img:  data.items[0].volumeInfo.imageLinks.thumbnail
    //desc:  data.items[0].volumeInfo.description
    if(props.data !== null) {
    console.log(props.data)
        return(
            <div>
                {props.data.totalItems === 0 ?        <div>No results found! Please try again</div> : 
                props.data.items.map((book,index) =>
                 {
                    
                    return(
                        <ListItem
                        key={index}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        price={book.saleInfo}
                        img={book.volumeInfo.imageLinks.thumbnail}
                        desc={book.volumeInfo.description}
                        />
                )}
            )}
        </div>
    ) 
    }
    else {
        return <div></div>
    }
  
}