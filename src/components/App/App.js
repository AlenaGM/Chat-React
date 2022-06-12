import CommentAddForm from '../commentAddForm/CommentAddForm';
import CommentsList from '../commentsList/CommentsList';

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className="title">Чат</h1>
      <CommentsList/>
      <CommentAddForm/>
    </div>
  );
}

export default App;
