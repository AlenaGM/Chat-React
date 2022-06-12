import './commentItem.css';

const CommentItem = (props) => {

    const {author, comment, like} = props;

    let classNames = 'list-group-item d-flex justify-content-between';

    if (like) {
        classNames += ' like';
    }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToggleProp} data-toggle="like">{author}</span>
                <input type="text" className="list-group-item-input" defaultValue={comment}/>
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