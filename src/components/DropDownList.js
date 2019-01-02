import React from 'react'

class DropDownList extends React.Component {
  renderDropDownList = (dropDownDownData) => {
    return (
      <div className="book-shelf-changer">
      <select>
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
