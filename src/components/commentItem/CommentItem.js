import { useState } from 'react';

import './commentItem.scss';

const CommentItem = (props) => {

    const [state, setState] = useState(props);

    const {author, comment} = state;
    const {onDelete, onToggleProp, like} = props;

    let classNames = 'comment';

    if (like) {
        classNames += ' icon__like';
    }

        return (
            <li className={classNames}>
                <span className="comment__username">{author}<i class='fa-solid fa-user fa-9x'></i></span>
                <div className="comment__date">14/01/2002 a 14:50</div>
                <input type="text" className="comment__text" defaultValue={comment}/>
                <div>
                    <i className="fas fa-trash icon icon__delete" onClick={onDelete}></i>
                    <i class="fa-regular fa-thumbs-up icon icon__like" onClick={onToggleProp} data-toggle="like"></i>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default CommentItem;