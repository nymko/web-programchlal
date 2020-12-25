import React, { Component } from 'react';
import axios from 'axios';
import './hmm.css';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeCarnumber = this.onChangeCarnumber.bind(this);
    this.onChangeCarmark = this.onChangeCarmark.bind(this);
    this.onChangeOwnerovog = this.onChangeOwnerovog.bind(this);
    this.onChangeOwnerner = this.onChangeOwnerner.bind(this);
    this.onChangeOwnerrd = this.onChangeOwnerrd.bind(this);
    this.onChangeOwnerphone = this.onChangeOwnerphone.bind(this);
    this.onChangeUildon = this.onChangeUildon.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      carnumber: '',
      carmark: '',
      ownerovog: '',
      ownerner: '',
      ownerrd: '',
      ownerphone:'',
      uildon: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.carnumber),
            carnumber: response.data[0].carnumber
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeCarnumber(e) {
    this.setState({
      carnumber: e.target.value
    })
  }

  onChangeCarmark(e) {
    this.setState({
      carmark: e.target.value
    })
  }

  onChangeOwnerovog(e) {
    this.setState({
      ownerovog: e.target.value
    })
  }

  onChangeOwnerner(e) {
    this.setState({
      ownerner: e.target.value
    })
  }
  onChangeOwnerrd(e) {
    this.setState({
      ownerrd: e.target.value
    })
  }

  onChangeOwnerphone(e) {
    this.setState({
      ownerphone: e.target.value
    })
  }
  
  onChangeUildon(e) {
    this.setState({
      uildon: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      carnumber: this.state.carnumber,
      carmark: this.state.carmark,
      ownerovog: this.state.ownerovog,
      ownerner: this.state.ownerner,
      ownerrd: this.state.ownerrd,
      ownerphone: this.state.ownerphone,
      uildon: this.state.uildon
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Тээврийн хэрэгслийн бүртгэл үүсгэх</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Тээврийн хэрэгслийн улсын дугаар: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.carnumber}
              onChange={this.onChangeCarnumber}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Тээврийн хэрэгслийн марк: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.carmark}
              onChange={this.onChangeCarmark}
              />
        </div>
        <div className="form-group">
          <label>Эзэмшигчийн овог: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.ownerovog}
              onChange={this.onChangeOwnerovog}
              />
        </div>
        <div className="form-group">
          <label>Эзэмшигчийн нэр: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.ownerner}
              onChange={this.onChangeOwnerner}
              />
        </div>
        <div className="form-group">
          <label>Эзэмшигчийн регистрийн дугаар: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.ownerrd}
              onChange={this.onChangeOwnerrd}
              />
        </div><div className="form-group">
          <label>Эзэмшигчийн утасны дугаар: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.ownerphone}
              onChange={this.onChangeOwnerphone}
              />
        </div>

        <div className="form-group">
          <label>Тээврийн хэрэгслийн үйлдвэрлэгдсэн он: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.uildon}
              onChange={this.onChangeUildon}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Бүртгэл үүсгэх" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}