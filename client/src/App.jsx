import { useState } from "react";
import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const App = () => {
  const [credentials, setCredentials] = useState('');

  const protectedRoute = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/oAuth`, { credentials }
      );
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <h1>HOMEPAGE</h1>
      <GoogleLogin 
        onSuccess={credentialResponse => {
          setCredentials(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
        useOneTap
      />
      <button onClick={protectedRoute}>Protected</button>
    </>
  );
}

export default App;