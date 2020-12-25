import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './hmm.css';

const Exercise = props => (
  <tr>
    <td>{props.exercise.carnumber}</td>
    <td>{props.exercise.carmark}</td>
    <td>{props.exercise.ownerovog}</td>
    <td>{props.exercise.ownerner}</td>
    <td>{props.exercise.ownerrd}</td>
    <td>{props.exercise.ownerphone}</td>
    <td>{props.exercise.uildon}</td>
    <td>
      <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Тээврийн хэрэгслийн бүртгэлүүд</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Тээврийн хэрэгслийн дугаар</th>
              <th>Тээврийн хэрэгслийн марк</th>
              <th>Эзэмшигчийн овог</th>
              <th>Эзэмшигчийн нэр</th>
              <th>Эзэмшигчийн РД</th>
              <th>Эзэмшигчийн утас</th>
              <th>Тээврийн хэрэгслийн үйлдвэрлэгдсэн он</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
      </div>
    )
  }
}