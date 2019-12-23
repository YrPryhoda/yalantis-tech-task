import React from 'react';
import './navbar.css';

class Navbar extends React.Component {
  componentDidMount() {
    this.addStyleToNavbar();
  }
  months = [
    { id: '-01-', name: 'Январь' },   { id: '-02-', name: 'Февраль' },
    { id: '-03-', name: 'Март' },     { id: '-04-', name: 'Апрель' },
    { id: '-05-', name: 'Май' },      { id: '-06-', name: 'Июнь' },
    { id: '-07-', name: 'Июль' },     { id: '-08-', name: 'Август' },
    { id: '-09-', name: 'Сентябрь' }, { id: '-10-', name: 'Октябрь' },
    { id: '-11-', name: 'Ноябрь' },   { id: '-12-', name: 'Декабрь' },
  ];
  MonthsHighliter = () => {
    let count = [];
    for (let i = 0; i < this.months.length; i++) {
      let key = this.months[i].id;
      let value = (this.props.data.filter((el) => el.dob.includes(this.months[i].id))).length;
      count.push({ id: key, count: value })
    }
    return count;
  }
  addStyleToNavbar = () => {
    const res = this.MonthsHighliter();
    res.forEach((item) => {
      switch (true) {
        case (item.count < 3):
          document.getElementById(item.id).classList.add('less-2');
          break;
        case (item.count < 7):
          document.getElementById(item.id).classList.add('less-7');
          break;
        case (item.count < 11):
          document.getElementById(item.id).classList.add('less-11');
          break;
        case (item.count > 11):
          document.getElementById(item.id).classList.add('more-11');
          break;
        default:
          return false;
      }
    })
  }

  showMonths = (arr) => {

    return arr.map(el => {
      return (<li key={el.id} id={el.id} className="list-group-item my-list">
        {el.name}
      </li>)
    });
  }
  render() {
    const blockMonths = this.showMonths(this.months);
    return (
      <ul onMouseOver={this.props.getPeopleOnMonthsClick} className="list-group my-group">
        {blockMonths}
      </ul>
    )
  }
}
export default Navbar;