import { useContext, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import '../pages/login.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Loginpagedata } from '../../App';
import { GoogleAuthProvider, signInWithPopup ,signInWithEmailAndPassword,getAuth} from 'firebase/auth';
import {  app_firebase } from '../../App';
function Loginpage() {
    const [count, setCount] = useState(0)
    const { register, handleSubmit } = useForm();
    const { setSignup } = useContext(Loginpagedata);

    const auth = getAuth(app_firebase);



    const formsubmit = async (data) => {
        console.log("formData", data)
        // const provider = new GoogleAuthProvider();
        // const result = await signInWithPopup(auth, provider);

                 const userCredential = await signInWithEmailAndPassword(auth, data?.email, data?.password);
                 console.log("User signed up:", userCredential);
    }
    const handleGoogleLogin = async () => {
        try {

            console.log("Google user:", result.user);
        } catch (error) {
            console.error("Google login error:", error.message);
        }
    };

    return (
        <>
            <div className='logincontainer'>
                <div className='logintittle'>Login page</div>
                <div className='loginform'>
                    <form onSubmit={handleSubmit(formsubmit)}>
                        <div className='inputsection'>
                            <label>Useename</label>
                            <TextField
                                id="outlined-password-input"
                                type="text"
                                {...register('email')}
                                sx={{

                                    '& .MuiInputBase-root': {
                                        height: 40, // input box height
                                    },
                                    '& input': {
                                        padding: '12px 14px', // controls text padding
                                    },
                                }}
                            />
                        </div>
                        <div className='inputsection'>
                            <label>Password</label>

                            <TextField
                                id="outlined-password-input"
                                type="password"
                                {...register('password')}
                                sx={{

                                    '& .MuiInputBase-root': {
                                        height: 40, // input box height
                                    },
                                    '& input': {
                                        padding: '12px 14px', // controls text padding
                                    },
                                }}
                            />
                        </div>
                        <div className='formbtn'>
                            <Button variant="contained" color="success" type="submit">Login</Button>
                            <Button variant="contained" color="success" onClick={() => setSignup(false)}>Creat Account</Button>
                        </div>
                    </form>

                </div>

            </div>

        </>
    )
}

export default Loginpage
