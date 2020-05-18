import React from 'react';


export default class List extends React.Component {
    fetchBooks = (event) => {
        event.preventDefault();
        console.log(event.target.elements['search'].value)
        console.log(event.target.elements['print-type'].value)
        console.log(event.target.elements['book-type'].value)
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