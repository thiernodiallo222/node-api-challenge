import React, { Component } from 'react'
import '../App.css';

export class ListChild extends Component {

    constructor(props) {
        super(props);
    this.state={}
}
    
    render() {
        return (
            <div class="list-child">
                     <h2>WELCOME TO MY APP</h2>
                    <p>ID: {this.props.id}</p>
                   <p>NAME: {this.props.project.name}</p>
                  <p>DESCRIPTION: {this.props.description}</p>
                
            </div>
        )
    }
}

export default ListChild



                // {/* <div className="welcome-sentence"> WELCOME TO MY APP </div> */}
                // {/* <div className="projects-actions"> */}
                // {/* <h1 className="projects-list"> List of projects</h1> */}
                // {/* <h1 className ="actions-list"> List of Actions</h1> */}
                // /* </div> */  