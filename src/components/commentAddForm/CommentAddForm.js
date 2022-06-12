import { Component } from 'react';
import './commentAddForm.scss';
import user from '../../resources/img/user.png'

class CommentAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            comment: '',
            avatar: user
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = () => {

        if (this.state.author.length < 1 || this.state.comment.length < 1) return;
        this.props.onAdd(this.state.author, this.state.comment);
        this.setState({
            author: '',
            comment: '',
            avatar:''
        })
    }

    render() {
        const {author, avatar, comment} = this.state;

        return(
            <form className="form">
                <label
                    htmlFor="author"
                    className="form__label"/> Имя *
                <input
                    type="text"
                    className="form__input input_author"
                    placeholder="Имя"
                    name="author"
                    defaultValue={author}
                    onChange={this.onValueChange}/>

                <label
                    htmlFor="photo"
                    className="form__label"/> Аватарка *
                <input
                    type="file"
                    className="file"/>
                <div className="photoPreview">{avatar}</div>

                <div className="form__label"> Комментарий:</div>
                <textarea
                    className="form__input"
                    name="comment"
                    defaultValue={comment}/>

                <button type="submit" className="form__button" onSubmit = {this.onSubmit}/> Отправить
            </form>
        )
    }
}

export default CommentAddForm;