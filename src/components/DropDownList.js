import React from 'react'

class DropDownList extends React.Component {
  changeFunc = (e) => {
    console.log('option fired:',e.currentTarget.value);
    this.setState({value:e.currentTarget.value});
    //(options&&console.log('value in DropDown:',e.options[e.selected.index].value))||console.log('options:'+undefined)
    //this.props.moveBook(e.options[e.selected.index].value);
  }

  state = {value: this.props.currentShelf};

  renderDropDownList = (dropDownDownData) => {
    return (
      <div className="book-shelf-changer">
        <select value = {this.state.value} onChange={this.changeFunc}>
          <option value="move" disabled>Move to...</option>

          {dropDownDownData.map((item) => (<option key = {item} value={item} >{item}</option>))}
        </select>
      </div>
    )

  }
  render() {
    return this.renderDropDownList(this.props.shelfs)
  }
}

export  { DropDownList }
