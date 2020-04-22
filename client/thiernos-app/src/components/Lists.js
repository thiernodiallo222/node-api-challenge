import React, { Component } from 'react'
import   ProjectsList  from './ProjectsList';
import ActionsList from './ActionsList';
import '../App.css';

export class Lists extends Component {
    render() {
        return (
            <div className="projects-actions">
                <div className="sections">
                  <ProjectsList className="sections"/>
                </div>
             
                <div className="sections">
                    <ActionsList className="sections"/>
                </div>
            </div>
        )
    }
}

export default Lists
