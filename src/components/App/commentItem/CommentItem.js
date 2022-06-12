import './commentItem.scss';

const CommentItem = (props) => {

    const {author, comment, onDelete, onToggleProp, like} = props;

    let classNames = 'card';

    if (like) {
        classNames += ' like';
    }

        return (
            <li className={classNames}>
                <span className="card__username">{author}<i class='fa-solid fa-user fa-9x'></i></span>
                <div className="card__date">14/01/2002 a 14:50</div>
                <input type="text" className="card__text" defaultValue={comment}/>
                <div>
                    <i className="fas fa-trash" onClick={onDelete}></i>
                    <i class="fa-regular fa-thumbs-up" onClick={onToggleProp} data-toggle="like"></i>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default CommentItem;