import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

function PageHeader(props) {
    const currentUser = props.currentUser
    const handleSignOut = () => {
        const auth = getAuth();
        auth.signOut().then(() => {
          console.log("Successfully signed out");
        }).catch((error) => {
          console.error("Sign out error", error);
        });
    };
      
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand-link" href="/">
                        <img src="img/palette_logo_without_bg.png" className="logo" alt="Your Pal-ette Logo" />
                        Your Pal-ette
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav p-2">
                            <li className="nav-item px-4">
                                <a className="nav-link active" aria-current="page" href="/quiz">Quiz</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" href="/create">Create</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" href="/explore">Explore</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" href="/profile">Profile</a>
                            </li>
                        </ul>
                        <div className='authorization'>
                            {currentUser ? (
                                <button type="button" className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
                            ) : (
                                <a href="/signin" className="btn btn-primary signin">Sign In</a>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default PageHeader;