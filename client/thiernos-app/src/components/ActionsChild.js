import React, { Component } from 'react'

export class ActionsChild extends Component {
 render() {
     return (
            
            <div class="list-child">
            <p>ID: {this.props.id}</p>
             <p>DESCRIPTION: {this.props.description}</p>
             <p>Project ID: {this.props.project_id}</p>
                <p>Notes: {this.props.notes}</p>
                
            </div>
        )
    }
}

export default ActionsChild

