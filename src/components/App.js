import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import QuizPage from "./Quizpage";
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage';
import Create from './Create';
import CreateResults from './CreateResults';
import ExplorePage from './ExplorePage';


function App(props) {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create" element={<CreateResults />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
