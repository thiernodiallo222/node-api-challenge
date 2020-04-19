import React, { Component } from 'react'
import { ListChild } from './ListChild';
import axios from 'axios';

export class List extends Component {

      constructor(props) {
    super(props);
          this.state = {
        message:"welcome to my app"
    };
      }
    
    componentDidMount() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }
    
    render() {
        return (
            <div>
                <ListChild message={this.state.message}/>
            </div>
        )
    }
}

export default List
