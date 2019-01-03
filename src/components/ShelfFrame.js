import React from 'react'
import {ShelfInner} from './ShelfInner'

class ShelfFrame extends React.Component {
  render (){
    return (
      <div className="bookshelf">
<<<<<<< HEAD
         {console.log('bookshelf-title',this.props.booksArr.shelf)}
        <h2 className="bookshelf-title">{(this.props.booksArr.shelf==='currentlyReading'&&this.props.shelfs[0])||(this.props.booksArr.shelf==='wantToRead'&&this.props.shelfs[1])||(this.props.booksArr.shelf==='read'&&this.props.shelfs[2])}</h2>
=======
        <h2 className="bookshelf-title">{this.props.currentShelf}</h2>
>>>>>>> first-steps
          <ShelfInner shelfs = {this.props.shelfs} booksArr = {this.props.booksArr}/>
      </div>
    )
  }
}

export {ShelfFrame}
