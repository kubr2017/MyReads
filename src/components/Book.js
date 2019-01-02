import React from 'react'
import { DropDownList } from './DropDownList'



class Book extends React.Component {
  // const res = {};
  // state = {
//     urlPath: this.props.data.imageLinks.thumbnail ? this.props.data.imageLinks.thumbnail: "https://www.computerhope.com/jargon/e/error.gif"

//   }

  render() {
    //console.log('props:',this.props.data)
    //console.log('imageLinks',(this.props.data.imageLinks&&this.props.data.imageLinks.thumbnail) || null )
    //console.log('title',this.props.data.title? this.props.data.title:null)
    //console.log('authors',this.props.data.authors ? this.props.data.authors[0]:null)
    //console.log('shelf',this.props.data.shelf ? this.props.data.shelf:null)

    return (
        <div key={this.props.book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage:`url(${(this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) || 'https://www.computerhope.com/jargon/e/error.gif'})` }}></div>
            <DropDownList shelfs = {this.props.shelfs}/>
          </div>
          <div className="book-title">{(this.props.book.title && this.props.book.title) || null}</div>
          {/*(this.props.data.author) && (this.props.data.author.map((item) => (<div className="book-authors">{item}</div>)))*/}
          <div className="book-authors">{(this.props.book.author && this.props.book.author[0]) || null}</div>
        </div>
        <div>
        {/*BooksAPI.getAll().then(function(res){console.log(res)})*/}
        </div>
        </div>
      )
  }
}

export { Book }
