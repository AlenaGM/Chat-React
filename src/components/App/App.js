import { Component } from 'react';

import CommentsList from '../commentsList/CommentsList';
import CommentAddForm from '../commentAddForm/CommentAddForm';
import comments from "../../resources/data/comments.json";

import './App.scss';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      comments,
    }
    this.maxId = 4;
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
      comment,
      like: false,
      id: this.maxId++
    }
    this.setState(({comments}) => {
      const newArr = [...comments, newItem];
      return {
        comments: newArr
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({comments}) => ({
        comments: comments.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
        })
    }))
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
