import React, { Component } from 'react'
import ActionsChild from './ActionsChild';
import axios from 'axios';

export class ActionsList extends Component {
   constructor(props) {
    super(props);
    this.state = {
      projects:[]
    };
  }
    
  componentDidMount() {
    axios.get(`http://localhost:5000/actions`)
      .then(res => {
        console.log(res);
        this.setState({
          projects: res.data,
        })
      });
  }
    
  render() {
    return (
      <div className="project-unit">
        {this.state.projects.map(action => {
          return <ActionsChild
            id={action.id}
            project_id={action.project_id}
              description={action.description}
              notes={action.notes}
          />
          })}
      </div>
    )
  }
}

export default ActionsList
