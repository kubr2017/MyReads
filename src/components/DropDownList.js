import React from 'react'

class DropDownList extends React.Component {
  renderDropDownList = () => {
    const { dropDownDownData } = this.props;
    return {
      <div className="book-shelf-changer">
        <select>
          dropDownDownData.map(function(item){
            <option value={item}>{item}</option>
          })
        </select>
      </div>
    }

}

export  DropDownList
