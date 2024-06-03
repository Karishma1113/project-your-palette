import { useNavigate } from 'react-router-dom';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

function SignInPage(props) {
    const currentUser = props.currentUser;
    const navigate = useNavigate();
    const auth = getAuth();

    if(currentUser.userName) {
        return navigate("/")
      } 

    const firebaseUIConfig = {
        signInOptions: [
          GoogleAuthProvider.PROVIDER_ID,
          { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
        ],
        signInFlow: 'popup',
        credentialHelper: 'none',
        callbacks: {
            signInSuccessWithAuthResult: () => {
              return navigate("/profile")
            }
        }
    }

    return (
        <div>
            <main class="sign-in-page">
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={firebaseUIConfig}/>
            </main>
        </div>
    );
};

export default SignInPage;