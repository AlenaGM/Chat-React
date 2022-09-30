import { Component } from "react";
import "./commentAddForm.scss";

class CommentAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      date: "",
      comment: "",
    };
  }

  onValueChange = (e) => {
    e.stopPropagation();
    this.setState({
      ...this.state,
      [e.target.dataset.name]: e.target.value,
    });
    this.getDate();
  };

  getDate = () => {
    let date = new Date().toLocaleString();
    console.log(date);
    this.setState({ date });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.author || !this.state.comment) return;

    this.props.onAdd(this.state.author, this.state.date, this.state.comment);

    this.setState({
      author: "",
      comment: "",
    });
  };

  render() {
    const { author, comment } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmit}>
        <label htmlFor="author" className="form__label">
          {" "}
          Vous apparaîtrez en tant que :
        </label>
        <input
          maxLength={50}
          type="text"
          className="form__input"
          placeholder="Nom"
          data-name="author"
          value={author}
          onChange={this.onValueChange}
        />

        <div className="form__label"> Votre commentaire:</div>
        <textarea
          className="form__input"
          placeholder="Commentaire"
          data-name="comment"
          value={comment}
          onChange={this.onValueChange}
        />

        <button type="submit" className="form__button">
          Commenter
        </button>
      </form>
    );
  }
}

export default CommentAddForm;
