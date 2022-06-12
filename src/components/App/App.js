import CommentAddForm from '../commentAddForm/CommentAddForm';
import CommentsList from '../commentsList/CommentsList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <CommentsList/>
      <CommentAddForm/>
    </div>
  );
}

export default App;
