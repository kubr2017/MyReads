import React from 'react'
import {ShelfInner} from './ShelfInner'

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
