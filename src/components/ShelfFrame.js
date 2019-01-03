import React from 'react'
import {ShelfInner} from './ShelfInner'

class ShelfFrame extends React.Component {

  moveBook = (obj) => {
    console.log('Inside <ShelfFrame/>:',obj);
    this.props.moveBook(obj);
  }
  render (){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.currentShelf}</h2>
          <ShelfInner currentShelf = {this.props.currentShelf} shelfs = {this.props.shelfs} booksArr = {this.props.booksArr} moveBook = {this.moveBook}/>
      </div>
    )
  }
}

export {ShelfFrame}
