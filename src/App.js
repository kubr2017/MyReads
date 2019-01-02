import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { DropDownList } from './components/DropDownList'
import { Book } from './components/Book'
import { ShelfFrame } from './components/ShelfFrame'
import * as BooksAPI from './BooksAPI'

const shelfs  = ['Currently Reading','Want to Read','Read']


const data = [{urlPath:"http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
         title:'The Hobbit',
         author:'J.R.R. Tolkien'}]

class BooksApp extends React.Component {


  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((res) =>
      this.setState({books:res}) )
  }

  render() {
    console.log('Begin:',this.state.books);
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ShelfFrame data={shelfs[0]} booksArr={this.state.books.filter(function (item) {return (item.shelf='currentlyReading')})}/>
                <ShelfFrame data={shelfs[1]} booksArr={this.state.books.filter(function (item) {return (item.shelf='wantToRead')})}/>
                <ShelfFrame data={shelfs[2]} booksArr={this.state.books.filter(function (item) {return (item.shelf='read')})}/>
              </div>
            {/*  Tested well working component
              <div>
                <ShelfFrame data={shelfs[0]} booksArr={this.state.books.filter(function (item) {return (item.shelf='currentlyReading')})}/>
              </div>*/}
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
