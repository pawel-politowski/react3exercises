import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Comment from './Comment';
import Footbar from './Footbar';
import { Link } from 'react-router-dom';

class App extends Component {
  state = {
    postList: [],
};
componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => this.setState({postList: data}))
     }
    renderPostList = () => this.state.postList.map((element) => <Link key={element.id} to={`post/${element.id}`}>{element.title}<br/></Link>);

  render(){
  return (  
    <div>       
      <Header 
        title = "Mój Blog"
    />
     <Comment />
     {this.renderPostList()}

      <Footbar 
        footer = "&copy; Copyright 2020"
      />
    </div>    
  )
}}

export default App;
