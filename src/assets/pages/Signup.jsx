import { useContext, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import '../pages/login.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Loginpagedata ,app_firebase} from '../../App';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';


function Signup() {
    const [count, setCount] = useState(0)
    const { register, handleSubmit, } = useForm()
    const { signup, setSignup } = useContext(Loginpagedata);
    const auth = getAuth(app_firebase);


    const singupschema = [{ lable: 'Firt name', fieldname: 'firstName', type: 'text' }, { lable: 'Last name', fieldname: 'lastName', type: 'text' }, { lable: 'Email', fieldname: 'email', type: 'email' }, { lable: 'Phone number', fieldname: 'phoneName', type: 'text' }, { lable: 'Password', fieldname: 'password', type: 'password' }, { lable: 'Re-entet-password', fieldname: 'rePassword', type: 'password' }]

    const formsubmit = async (data) => {
        console.log("formData", data)
         setSignup(true)

           try {
            const userCredential = await createUserWithEmailAndPassword(auth, data?.email, data?.password);
            console.log("User signed up:", userCredential.user);
        } catch (error) {
            console.error("Signup error:", error.message);
        }
    };


    return (
        <>
            <div className='logincontainer'>
                <div className='logintittle'>Signup page</div>
                <div className='loginform'>
                    <form onSubmit={handleSubmit(formsubmit)}>
                        {singupschema && singupschema.map((x, index) => {
                            return <div className='inputsection' key={`input` + index}>
                                <label>{x.lable}</label>
                                <TextField

                                    type={x.type}
                                    {...register(x.fieldname)}
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            height: 40,
                                        },
                                        '& input': {
                                            padding: '12px 14px',
                                        },
                                    }}
                                />
                            </div>
                        })}
                        <div className='formbtn'>
                            <Button variant="contained" color="success" type="submit" >Creat </Button>
                        </div>
                    </form>

                </div>

            </div>

        </>
    )
}

export default Signup
