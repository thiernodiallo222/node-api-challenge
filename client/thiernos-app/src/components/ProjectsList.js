import React, { Component } from 'react'
import  ProjectsChild  from './ProjectsChild';
import axios from 'axios';

export class ProjectsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects:[]
    };
  }
    
  componentDidMount() {
    axios.get(`http://localhost:5000/projects`)
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
        {this.state.projects.map(project => {
          return <ProjectsChild
            id={project.id}
            name={project.name}
            description={project.description}
          />
          })}
      </div>
    )
  }
}

export default ProjectsList


            