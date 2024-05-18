import React from 'react';
import PageHeader from "./Header";
import PageFooter from "./Footer";

function SignInPage(props) {
    return (
        <body>
            <PageHeader />
            <main className="sign-in">
                <form action="./profile.html" method="post">
                    <div className="imgcontainer">
                        <img src="img/palette_logo_without_bg.png" alt="Logo of website Your Palette" />
                    </div>
                    <div className="container">
                        <label htmlFor="ID"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="ID" id="ID" required />
                        <label htmlFor="password"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" required />
                        <button type="submit" className="btn btn-primary btn-sm">Login</button>
                    </div>
                </form>
            </main>
            <PageFooter />
        </body>
    );
};

export default SignInPage;