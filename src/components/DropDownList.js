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
    const optionList  = ['Move to...','Currently Reading','Want to Read','Read','None']
    return this.renderDropDownList(optionList)
  }
}

export  { DropDownList }
