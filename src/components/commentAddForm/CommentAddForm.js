import { useState } from 'react';
import './commentAddForm.scss';

const CommentAddForm = (props) => {

    const [state, setState] = useState('');

    const {author, comment} = state;

    const onValueChange = (e) => {
        e.stopPropagation();
        setState({
            ...state,
            [e.target.dataset.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!author || !comment) return;

        props.onAdd(author, comment);
        setState({
            author: '',
            comment: '',
        })
    }

    return(
        <form className="form" onSubmit = {onSubmit}>
            <label
                htmlFor="author"
                className="form__label"> Имя
            </label>
            <input
                type="text"
                className="form__input"
                placeholder="Имя"
                data-name="author"
                defaultValue={author}
                onChange={onValueChange}/>

            <div className="form__label"> Комментарий:</div>
            <textarea
                className="form__input"
                placeholder="Комментарий"
                data-name="comment"
                defaultValue={comment}
                onChange={onValueChange}/>

            <button type="submit" className="form__button">Добавить</button>
        </form>
    )
}

export default CommentAddForm;

//                 <label
//htmlFor="photo"
//className="form__label"> Аватарка *
//</label>
//<input
//type="file"
//className="file"/>
//<div className="photoPreview">
//<img src={avatar} alt="avatar" className="comment__image"></img>
//</div>

