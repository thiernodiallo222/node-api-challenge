import React, { Component } from 'react'
import { ListChild } from './ListChild';
import axios from 'axios';

export class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: "welcome to my app",
      data:[]
    };
  }
    
  componentDidMount() {
    axios.get(`http://localhost:5000/projects`)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          data: res.data,
        })
      });
  }
    
  render() {
    return (
      <div>
        {this.state.data.map((project, index) => {
         return <ListChild id={index}
            project = { project }/>})}
      </div>
    )
  }
}

export default List
  // message={this.state.message}

            