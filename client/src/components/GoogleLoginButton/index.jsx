import { GoogleLogin } from "@react-oauth/google"

const GoogleLoginButton = () => {
  const handleError = () => {
    console.log("Login failed");
  }

  const handleSuccess = (credentialRes) => {
    console.log("credentialRes: ", credentialRes)
  }

  return <><GoogleLogin onError={handleError} onSuccess={handleSuccess} useOneTap/></>
}

export default GoogleLoginButton;
