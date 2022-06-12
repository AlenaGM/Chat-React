import CommentItem from '../commentItem/CommentItem';
import './commentsList.scss';

const CommentsList = ({comments, onDelete}) => {

    const elements = comments.map(item => {

        const {id, ...itemProps} = item;

        return (
        <CommentItem
            key={id}
            {...itemProps}
            onDelete={()=> onDelete(id)}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default CommentsList;