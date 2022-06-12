import './commentItem.scss';

const CommentItem = (props) => {

    const {author, comment, onDelete, onToggleProp, like} = props;

    let classNames = 'card';

    if (like) {
        classNames += ' like';
    }

        return (
            <li className={classNames}>
                <span className="card__username" onClick={onToggleProp} data-toggle="like">{author}<i class='fa-solid fa-user fa-9x'></i></span>
                <div className="card__date">14/01/2002 a 14:50</div>
                <input type="text" className="card__text" defaultValue={comment}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default CommentItem;