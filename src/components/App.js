import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer';
import HomePage from './Homepage';
import QuizPage from "./Quizpage";
import SignInPage from './SignInPage';
import ProfilePage from './ProfilePage';
import Create from './Create';
import CreateResults from './CreateResults';
import ExplorePage from './ExplorePage';


function App(props) {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            const user = {
                userId: firebaseUser.uid,
                userName: firebaseUser.displayName,
                userEmail: firebaseUser.email,
            };
            setCurrentUser(user);
            console.log("Hello, ", firebaseUser.displayName);
        } else {
            console.log("Sign out");
            setCurrentUser("");
        }
    });
    return () => unsubscribe();
  }, []);

  function ProtectedPage(props) {
    if (props.currentUser.userName === "") {
      return <Navigate to="/signin" />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <div>
    <Header currentUser={currentUser} />
    <Router>
      <div>
        <Routes>
          <Route path="/signin" element={<SignInPage currentUser={currentUser} />} />
          <Route element={<ProtectedPage currentUser={currentUser} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/profile" element={<ProfilePage currentUser={currentUser} />} />
            <Route path="/create" element={<Create />} />
            <Route path="/create" element={<CreateResults />} />
            <Route path="/explore" element={<ExplorePage />} />
          </Route>
        </Routes>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;