import { Component } from 'react';

import CommentAddForm from '../commentAddForm/CommentAddForm';
import CommentsList from '../commentsList/CommentsList';
import comments from "../../resources/data/comments.json";

import './App.scss';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      comments,
    }
  }

  deleteItem = (id) => {
    this.setState(({comments}) => {
      return {
        comments: comments.filter(item => item.id !== id)
      }
    })
  }

  addItem = (author, comment) => {
    const newItem = {
      author,
      comment
    }
    this.setState(({comments}) => {
      const newArr = [...comments, newItem];
      return {
        data: newArr
      }
    });
  }

  render(){
    const {comments} = this.state;

    return (
      <div className="App">
        <h1 className="title">Чат</h1>
        <CommentsList
          comments={comments}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
        <CommentAddForm
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
