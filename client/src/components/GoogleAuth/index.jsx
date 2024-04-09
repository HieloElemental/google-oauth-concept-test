import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from '../GoogleLoginButton';

const GoogleAuth = () => {
  const clientId = "939942299051-cnmbbb0quuvru682b6i9ikudjjivpcs4.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <h1>An H1 element</h1>
        <GoogleLoginButton />
      </GoogleOAuthProvider>
    </>
  )
}

export default GoogleAuth;