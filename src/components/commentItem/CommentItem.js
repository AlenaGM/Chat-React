import { useState } from 'react';
import './commentItem.scss';

const CommentItem = (props) => {

    const [state] = useState(props);

    const {onDelete, onToggleProp, like} = props;
    const {author, date, comment} = state;

    let classNames = 'comment';

    if (like) {
        classNames += ' icon__like';
    }


        return (
            <li className={classNames}>
                <span className="comment__username">{author}<i className='fa-solid fa-user fa-9x'></i></span>
                <div className="comment__date">{date}</div>
                <input type="text" className="comment__text" defaultValue={comment}/>
                <div>
                    <i className="fas fa-trash icon icon__delete" onClick={onDelete}></i>
                    <i className="fa-regular fa-thumbs-up icon icon__like" onClick={onToggleProp} data-toggle="like"></i>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default CommentItem;

    //let date = new Date();

    //date = `${new Intl.DateTimeFormat('ru-RU', {day:'2-digit', month:'2-digit'}).format(date)} в ${new Intl.DateTimeFormat('ru-RU', {hour:'2-digit', minute:'2-digit'}).format(date)}`;
