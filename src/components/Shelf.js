import React from 'react'
import {DropDownList} from './DropDownList'
import {Book} from './Book'

class Shelf extends React.Component {


      state = {
        a: []
      }

  render(){
    console.log('shelf comp booksArr:',this.props.booksArr);
    console.log('shelf comp booksArr[0]:',this.props.booksArr[0]);
  //  {const a = this.props.booksArr[0];
  //  console.log('a:',a);}
    this.state.a = this.props.booksArr[0]

    console.log('a:',this.state.a);

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
