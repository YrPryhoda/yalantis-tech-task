import React from 'react';
import './App.css';
import Service from '../service/service';
import MainBlock from '../MainBlock/main-block';
import Navbar from '../Navbar/navbar';
import Header from '../Header/header';
import ErrorCatch from '../error-catch'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: [],
      filtred: [],
      error: false
    }
  }

  componentDidMount() {
    const data = new Service().getData();
    data.then(el => {
      this.setState({
        data: el,
        isLoading: false
      });
    })
      .catch(this.onError);
  }

  onError = (err) => {
    this.setState({
      error: true,
      isLoading: false
    })
  }

  getPeopleOnMonthsClick = (e) => {
    const monthId = e.target.id,
      { data } = this.state,
      filtred = [];
    data.map(el => {
      if (el.dob.includes(monthId)) {
        filtred.push({
          name: el.firstName,
          lastName: el.lastName,
          id: el.id
        })
      }
      return this.setState({ filtred });
    })
  }

  render() {
    const { isLoading, filtred, data, error } = this.state,
      body = (<React.Fragment>
        <Header />
        <div className='row'>
          <div className='col-4'>
            <Navbar getPeopleOnMonthsClick={this.getPeopleOnMonthsClick} data={data} />
          </div>
          <div className='col-6'>
            <MainBlock filtred={filtred} />
          </div>
        </div>
      </React.Fragment>
      )
    if (isLoading) {
      return (<div className='container'><p className='text-center my-loading'>Loading...</p></div>)
    } else if (error) {
      return <ErrorCatch />
    } else {
      return (
        <div className='container'>
          {body}
        </div>
      )
    }
  }
}