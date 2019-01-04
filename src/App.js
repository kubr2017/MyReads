import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { ShelfFrame } from './components/ShelfFrame'
import * as BooksAPI from './BooksAPI'

const shelfs  = ['Currently Reading','Want to Read','Read']

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

  // {/*moveBook = (shelfValue,bookId) => {
    //(shelfValue&&bookId)&&(this.state.books.filter((item) =>(item.id===bookId))[0].shelf = shelfValue)
  //}*/}

  componentDidMount() {
    BooksAPI.getAll().then((res) =>
      this.setState({books:res}) )
  }

  moveBook = (obj) => {
    console.log('Inside <App/> obj:',obj);
    let index = this.state.books.findIndex( item => item.id===obj.id);
    console.log('index:',index);
    let bookShelf = obj.shelf;
    //turn to appropriate way 'Want to read' to 'wantToRead'
    console.log('before if bookShelf:',bookShelf);
    if (bookShelf ==='Currently Reading') {
      bookShelf='currentlyReading';
    } else if (bookShelf==='Want to Read') {
      bookShelf='wantToRead';
    } else {
      bookShelf='read';
    }

    console.log('old bookShelf:',this.state.books[index].shelf);

    let books = this.state.books.slice();
    books[index].shelf = bookShelf;
    console.log('books:',books);
    this.setState({books:books});
    console.log('bookShelf after change shelf',this.state.books[index].shelf);


// through Update function :
/*
    console.log('Inside <App/> obj:',obj);
    console.log('index:',obj.id);
    let bookShelf = obj.shelf;
    //turn to appropriate way 'Want to read' to 'wantToRead'
    console.log('before if bookShelf:',bookShelf);
    if (bookShelf ==='Currently Reading') {
      bookShelf='currentlyReading';
    } else if (bookShelf==='Want to Read') {
      bookShelf='wantToRead';
    } else {
      bookShelf='read';
    }
    console.log('After If:',bookShelf);

    BooksAPI.update(obj.id,bookShelf).then((res)=>{console.log('promise from Update:',res);
                                                   console.log('After promise BooksArr:',this.state.books);})
 */}


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
                <ShelfFrame key = {'currentlyReading'} currentShelf = {shelfs[0]} shelfs = {shelfs} booksArr={this.state.books.filter(function (item) {return item.shelf==='currentlyReading'})}  moveBook = {this.moveBook}/>
                <ShelfFrame key = {'wantToRead'} currentShelf = {shelfs[1]} shelfs = {shelfs} booksArr={this.state.books.filter(function (item) {return item.shelf==='wantToRead'})}  moveBook = {this.moveBook}/>
                <ShelfFrame key = {'read'} currentShelf = {shelfs[2]} shelfs = {shelfs} booksArr={this.state.books.filter(function (item) {return item.shelf==='read'})}  moveBook = {this.moveBook}/>
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
