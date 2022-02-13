import React, { createContext, useContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState(() => {
        const localData = localStorage.getItem('books')
        return localData ? JSON.parse(localData) : [] 
    }
    )
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    },[books])
    const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: uuid()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider