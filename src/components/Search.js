import React from 'react';


export default class List extends React.Component {
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
    //need the author, title, price, image, and desc.
    //author: data.items[0].volumeInfo.authors.toString()
    //title:  data.items[0].volumeInfo.title
    //price:  data.items[0].saleInfo.listPrice.amount.toString()
    //img:  data.items[0].volumeInfo.imageLinks.thumbnail
    //desc:  data.items[0].volumeInfo.description
    fetchBooks = (event) => {
        event.preventDefault();
        console.log(this.BASE_URL)
        let searchValue = event.target.elements['search'].value
        let printType = event.target.elements['print-type'].value
        let bookType = event.target.elements['book-type'].value
        let url = `${this.BASE_URL}?q=${searchValue}&filter=${bookType}&printType=${printType}`
        fetch(url)
            .then(res => res.json())
            .then(newData => this.props.onSearch(newData));
    }


    render() {
    return(
        <form onSubmit={e=> this.fetchBooks(e)}>
            <label htmlFor="search-box">Search:</label>
            <input name='search' type="text" id="search-box" placeholder="henry" required></input>
            <button type="submit">Search</button>
            <label htmlFor="print-type">Print Type:</label>
            <select name='print-type' id="print-type"> 
                <option value="all">All</option>
                <option value="books">Books</option>
                <option value="magazines">magazines</option>
            </select>
            <label htmlFor="book-type">Book Type:</label>
            <select name='book-type' id="book-type"> 
                <option value="ebooks">ebooks</option>
                <option value="free-ebooks">free-ebooks</option>
                <option value="full">full</option>
                <option value="paid-ebooks">paid-ebooks</option>
                <option value="partial">partial</option>
            </select>
        </form>
    )
    }
}
