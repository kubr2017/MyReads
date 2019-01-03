import React from 'react'
import {ShelfInner} from './ShelfInner'

class ShelfFrame extends React.Component {
  render (){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.currentShelf}</h2>
          <ShelfInner currentShelf = {this.props.currentShelf} shelfs = {this.props.shelfs} booksArr = {this.props.booksArr}/>
      </div>
    )
  }
}

export {ShelfFrame}
