import React, { Component } from 'react';
import axios from 'axios';

import './hmm.css';
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeCarnumber = this.onChangeCarnumber.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      carnumber: ''
    }
  }

  onChangeCarnumber(e) {
    this.setState({
      carnumber: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      carnumber: this.state.carnumber
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      carnumber: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Шинээр дугаар үүсгэх</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Улсын дугаар: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.carnumber}
                onChange={this.onChangeCarnumber}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Үүсгэх" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}