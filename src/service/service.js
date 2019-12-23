export default class Service {

  _url = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

  getData =  () => {
    const getFetch =  fetch(this._url)
      .then(response => response.json());
    return getFetch;
  }
}