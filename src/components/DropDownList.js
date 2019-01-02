import React from 'react'

class DropDownList extends React.Component {
  changeFunc(e){
    console.log('value in DropDown:',e.options[e.selected.index].value);
    this.props.moveBook(e.options[e.selected.index].value);
  }
  renderDropDownList = (dropDownDownData) => {
    return (
      <div className="book-shelf-changer">
        <select onchange="changeFunc()">
          <option value="move" disabled>Move to...</option>
          {dropDownDownData.map(item => (<option key = {item} value={item}>{item}</option>))}
        </select>
      </div>
    )

  }
  render() {
    return this.renderDropDownList(this.props.shelfs)
  }
}

export  { DropDownList }
