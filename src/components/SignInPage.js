import { useNavigate } from 'react-router-dom';
import {getAuth, EmailAuthProvider, GoogleAuthProvider} from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import PageHeader from "./Header";
import PageFooter from "./Footer";

function SignInPage(props) {
    const navigate = useNavigate();
    const auth = getAuth();

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
            <PageHeader />
            <main>
                <StyledFirebaseAuth firebaseAuth={auth} uiConfig={firebaseUIConfig}/>
            </main>
            <PageFooter />
        </div>
    );
};

export default SignInPage;