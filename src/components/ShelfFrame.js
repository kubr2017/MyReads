import React from 'react'
import {ShelfInner} from './ShelfInner'
import {Book} from './Book'

class ShelfFrame extends React.Component {
  render (){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.data}</h2>
          <ShelfInner booksArr = {this.props.booksArr}/>
      </div>
    )
  }
}

export {ShelfFrame}
