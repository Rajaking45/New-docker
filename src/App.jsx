  import { createContext, useState } from 'react'
  import Loginpage from './assets/pages/Loginpage';
  import Signup from './assets/pages/Signup';

  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
    apiKey: "AIzaSyBgAWn-4DGxjh1IsJkoS-L93-_iAn7CPP8",
    authDomain: "veno-app-da1f7.firebaseapp.com",
    projectId: "veno-app-da1f7",
    storageBucket: "veno-app-da1f7.firebasestorage.app",
    messagingSenderId: "403749654495",
    appId: "1:403749654495:web:7a8112334302a96df5be6a",
    measurementId: "G-K9VPNB437D"
  };

  // Initialize Firebase
  export const app_firebase = initializeApp(firebaseConfig);

  export const Loginpagedata = createContext()

  function App() {
    const [signup, setSignup] = useState(true);
    return (
      <Loginpagedata.Provider value={{ signup, setSignup }}>
        {signup ? <Loginpage /> :
          <Signup />}
      </Loginpagedata.Provider>
    )
  }

  export default App
