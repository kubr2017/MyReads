import React from 'react'
import { DropDownList } from './DropDownList'
import * as BooksAPI from '../../src/BooksAPI.js'



class Book extends React.Component {
  // const res = {};

  render() {
    console.log('prop',this.props.data);
    return (
      this.props.data.map((item,index) => (
        <div key={index}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${item.urlPath})`}}></div>
            <DropDownList/>
          </div>
          <div className="book-title">{item.title}</div>
          <div className="book-authors">{item.author}</div>
        </div>
        <div>
        {/*BooksAPI.getAll().then(function(res){console.log(res)})*/}
        </div>
        </div>)
      )

    )
  }
}

export { Book }
