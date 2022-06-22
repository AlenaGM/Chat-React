import { Component } from 'react';
import './commentAddForm.scss';

class CommentAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            comment: ''
        }
    }

    onValueChange = (e) => {
        e.stopPropagation();
        this.setState({
            ...this.state,
            [e.target.dataset.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.author || !this.state.comment) return;

        this.props.onAdd(this.state.author, this.state.comment);
        this.setState({
            author: '',
            comment: '',
        })
    }

    render () {
        const {author, comment} = this.state;

        return(
            <form className="form" onSubmit = {this.onSubmit}>
                <label
                    htmlFor="author"
                    className="form__label"> Имя
                </label>
                <input
                    type="text"
                    className="form__input"
                    placeholder="Имя"
                    data-name="author"
                    value={author}
                    onChange={this.onValueChange}/>

                <div className="form__label"> Комментарий:</div>
                <textarea
                    className="form__input"
                    placeholder="Комментарий"
                    data-name="comment"
                    value={comment}
                    onChange={this.onValueChange}/>

                <button type="submit" className="form__button">Добавить</button>
            </form>
        )
    }
}

export default CommentAddForm;

