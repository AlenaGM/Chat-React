import { Component } from 'react';
import './commentAddForm.scss';
//import user from '../../resources/img/user.png'

class CommentAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            comment: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.author.length < 3 || !this.state.comment) return;
        this.props.onAdd(this.state.author, this.state.comment);
        this.setState({
            author: '',
            comment: '',
        })
    }

    render() {
        const {author, comment} = this.state;

        return(
            <form className="form" onSubmit = {this.onSubmit}>
                <label
                    htmlFor="author"
                    className="form__label"> Имя *
                </label>
                <input
                    type="text"
                    className="form__input input_author"
                    placeholder="Имя"
                    name="author"
                    defaultValue={author}
                    onChange={this.onValueChange}/>

                <div className="form__label"> Комментарий:</div>
                <textarea
                    className="form__input"
                    placeholder="Комментарий"
                    name="comment"
                    defaultValue={comment}
                    onChange={this.onValueChange}/>

                <button type="submit" className="form__button">Добавить</button>
            </form>
        )
    }
}

//                 <label
//htmlFor="photo"
//className="form__label"> Аватарка *
//</label>
//<input
//type="file"
//className="file"/>
//<div className="photoPreview">
//<img src={avatar} alt="avatar" className="card__image"></img>
//</div>

export default CommentAddForm;