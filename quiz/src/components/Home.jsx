import { Component } from 'react'
import {Link} from 'react-router-dom'
import "../App.css"

export default class Home extends Component {
  constructor(props) {
    super(props)

  }
  
  render() {
    return (
      <div>
        <div id="home">
        <h1>Quiz App</h1>
       <Link to="/Quiz"><button>Play</button></Link>
        </div>
      </div>
    )
  }
}