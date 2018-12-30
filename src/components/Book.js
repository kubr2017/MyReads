import React from 'react'
import { DropDownList } from './DropDownList'
import * as BooksAPI from '../../src/BooksAPI.js'



class Book extends React.Component {
  // const res = {};
  // state = {
  //   urlPath: this.props.data.map((item)=>(item.imageLinks.thumbnail)),
  //   title: this.props.data.map((item)=>(item.title)),
  //   Author:[]
  //
  // }

  render() {
    console.log('prop',this.props.data.imageLinks)
    {/*this.props.data ? console.log('map:',this.props.data.title):console.log('zero');*/}

    return (
        <div key={this.props.data.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:`url(${/*"https://www.computerhope.com/jargon/e/error.gif"*/this.props.data.imageLinks})` }}></div>
            <DropDownList/>
          </div>
          <div className="book-title">{this.props.data.title}</div>
          <div className="book-authors">{this.props.data.author}</div>
        </div>
        <div>
        {/*BooksAPI.getAll().then(function(res){console.log(res)})*/}
        </div>
        </div>
      )
  }
}

export { Book }
