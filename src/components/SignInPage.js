import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from "./Header";
import PageFooter from "./Footer";

function SignInPage(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } =event.target;
        if (name === "ID") {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value)
        }
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Logging in with', username, password)
        if (username === "Admin" && password === "123456") {
            navigate("/profile");
        } else {
            alert("Incorrect Username or Password, Username is Admin, Password is 123456")
        }
    }

    return (
        <body>
            <PageHeader />
            <main className="sign-in">
                <form onSubmit={handleSubmit}>
                    <div className="imgcontainer">
                        <img src="img/palette_logo_without_bg.png" alt="Logo of website Your Palette" />
                    </div>
                    <div className="container">
                        <label htmlFor="ID"><b>Username:</b></label>
                        <input type="text" placeholder="Enter Username" name="ID" id="ID" required value={username} onChange={handleInputChange} />
                        <label htmlFor="password"><b>Password:</b></label>
                        <input type="password" placeholder="Enter Password" name="password" id="password" required value={password} onChange={handleInputChange} />
                        <button type="submit" className="btn btn-primary btn-sm">Login</button>
                    </div>
                </form>
            </main>
            <PageFooter />
        </body>
    );
};

export default SignInPage;