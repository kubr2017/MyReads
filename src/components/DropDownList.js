import React from 'react'

class DropDownList extends React.Component {
  renderDropDownList = (dropDownDownData) => {
    return (
      <div className="book-shelf-changer">
        <select>
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
