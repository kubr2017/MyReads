import React from 'react'
import {DropDownList} from './DropDownList'
import {Book} from './Book'

class ShelfInner extends React.Component {

      state = {
        a: []
      }

  render(){
  //  console.log('shelf comp booksArr:',this.props.booksArr);
  //  console.log('shelf comp booksArr[0]:',this.props.booksArr[0]);
  //  {const a = this.props.booksArr[0];
  //  console.log('a:',a);}
    this.state.a = this.props.booksArr[0]
    console.log('a:',this.state.a);

    return(
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.booksArr.map((item)=>(<li><Book data={item}/></li>))}
          </ol>
        </div>
    )
  }
}

export { ShelfInner }
