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

  declOfNum = (n, text_arr) => {
    n = Math.abs(n) % 100
    var n1 = n % 10
    if (n > 10 && n < 20) {
        return text_arr[2]
    }
    if (n1 > 1 && n1 < 5) {
        return text_arr[1]
    }
    if (n1 === 1) {
        return text_arr[0]
    }
    return text_arr[2]
  }

  render(){
    const {comments} = this.state;

    return (
      <div className="app">
        <h1 className="app__title">{comments.length} {this.declOfNum(comments.length, ['комментарий', 'комментария', 'комментариев'])}</h1>
        <CommentsList
          comments={comments}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}/>
        <h2 className="app__title">Добавить комментарий</h2>
        <CommentAddForm
          onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
