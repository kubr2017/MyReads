import React from 'react'
import {DropDownList} from './DropDownList'
import {Book} from './Book'

class Shelf extends React.Component {

  render(){
    console.log('shelf comp booksArr:',this.props.booksArr);
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.data/*Currently Reading*/}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.booksArr.map((item)=>(<li><Book data={item}/></li>))}
          </ol>
        </div>
      </div>
    )
  }


}

export { Shelf }
