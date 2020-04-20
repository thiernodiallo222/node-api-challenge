import React, { Component } from 'react'
import '../App.css';

export class ProjectsChild extends Component {

//     constructor(props) {
//         super(props);
//     this.state={}
// }
    
    render() {
        return (
            <div class="list-child">
                     {/* <h2>WELCOME TO MY APP</h2> */}
                    <p>ID: {this.props.id}</p>
                   <p>NAME: {this.props.name}</p>
                  <p>DESCRIPTION: {this.props.description}</p>
                
            </div>
        )
    }
}

export default ProjectsChild


