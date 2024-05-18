import React from 'react';

function PageHeader(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand-link" href="index.html">
                        <img src="img/palette_logo_without_bg.png" className="logo" alt="Your Pal-ette Logo" />
                        Your Pal-ette
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav p-2">
                            <li className="nav-item px-4">
                                <a className="nav-link active" aria-current="page" href="quiz.html">Quiz</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" href="create.html">Create</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" href="explore.html">Explore</a>
                            </li>
                            <li className="nav-item px-4">
                                <a className="nav-link active" href="sign-in.html">Profile</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default PageHeader;