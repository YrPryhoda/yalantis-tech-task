import React, { Component } from 'react';
import './main-block.css';

export default class MainBlock extends Component {
  showResults = () => {
    const { filtred } = this.props;
    const list = filtred.map(el => {
      return (
        <li key={el.id} className="list-group-item my-people">
          {`${el.name}  ${el.lastName}`}
        </li>
      )
    })
    return list;
  }
  
  render() {
    const updatePeople = this.showResults();
    return (
      <ul className="list-group list-group-flush ">
        {updatePeople}
      </ul>
    )
  }
}