import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from "./Homepage";
import QuizPage from "./Quizpage";
import SignInPage from './SignInPage';

function App(props) {
  return (
    <div>
      {/* <HomePage /> */}
      <QuizPage />
      {/* {<SignInPage />} */}
    </div>
  );
}

export default App;
