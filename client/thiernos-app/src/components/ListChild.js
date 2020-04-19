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

               <div className="welcome-sentence"> {this.props.message} </div>
                <div className="projects-actions">
                <h1 className="projects-list"> List of projects</h1>
                <h1 className ="actions-list"> List of Actions</h1>
                </div>
                
            </div>
        )
    }
}

export default ListChild
