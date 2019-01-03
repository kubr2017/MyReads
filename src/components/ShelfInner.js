import React from 'react'
import {Book} from './Book'

class ShelfInner extends React.Component {
  moveBook = (obj) =>{
    console.log('In <ShelfInner/> obj:',obj);
    this.props.moveBook(obj);
  }

  render(){
    console.log('shelf comp booksArr:',this.props.booksArr);
  //  console.log('shelf comp booksArr[0]:',this.props.booksArr[0]);
  //  {const a = this.props.booksArr[0];
  //  console.log('a:',a);}
    return(
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.booksArr.map((item)=>(<li key = {item.id}><Book currentShelf = {this.props.currentShelf} shelfs = {this.props.shelfs} book = {item} moveBook = {this.moveBook}/></li>))}
          </ol>
        </div>
    )
  }
}

export { ShelfInner }
