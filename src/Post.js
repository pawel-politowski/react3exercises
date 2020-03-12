import React, { Component } from 'react';

class Post extends Component{
    state = {
        postDetails: {},
    };
    componentDidMount() {
           fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.siteId}`)
        .then(response => response.json())
        .then(data => this.setState({postDetails: data}))
         }        
    
    render(){
        return(
        <div>
                <p>{this.state.postDetails.title}</p>
                <p>{this.state.postDetails.body}</p>
        </div>
        )
    }
}

export default Post;