import { useState } from 'react'
import Footer from './Footer'
import Nnavbar from './Navbar'
import { Button } from 'react-bootstrap'
import {useLocation} from 'react-router-dom';
import Signup2 from './Signup2';
import Signup3 from './Signup3';
import Signup4 from './Signup4';
import Signup5 from './Signup5';

export default function Signup() {
    const loction = useLocation()
    
    const[step , setStep] = useState (1);
    const[password , setPassword] = useState('')
    const[pass, setpass] = useState(false)
    const[plan , setPlan] = useState()
    function getPlan(data){
        if(data ===1){
            setPlan('Mobile')
        }else if(data ===2){
            setPlan('Basic')
        }else if(data ===3){
            setPlan('Standard')
        }else if(data ===4){
            setPlan('Premimum')
        }
    }
    const formData = {email : loction.state,pass:password,Plan:plan}
    // console.log(formData)
    const signpass = (e) => {
        e.preventDefault()
        if(password.length >8){
        setStep(2)}
        else{
            
            document.getElementById("pass").className = "form-control is-invalid"
            setpass(true)
        }
        
    }
    function getData(data){
        setStep(data)
    }
    
    if(step === 2){
        return(
            <Signup2  f = { getData} />
        )
    }
    else if(step === 3){
        return(
            <Signup3 x = { getData} y = {getPlan}/>
        )
    }
    else if(step === 4){
        return(
            <Signup4 x = { getData} />
        )
    }
    else if(step === 5){
        return(
            <Signup5 data = {formData} x = { getData} a = {plan}/>
        )
    }

  return (
    <div >
        <Nnavbar/>
        <hr></hr>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center",marginTop:"50px"}}>
            <div className='py-1'>
                <div className='card-body '>
                    <p style={{fontSize:"13px" , margin:"0px"}}>STEP <b>1</b> OF <b>3</b></p>
                    <h2 >Welcome </h2>
                    <h2>Joining Netflix is easy.</h2>
                    <p style={{fontSize:"20px" , width:"400px"}}>Enter your password and youll be watching in no time.</p>
                    <div className='mt-4'>
                        <form onSubmit={signpass}> 
                            <label>Email</label>
                            <p><b>{loction.state}</b></p>
                            <input type='password' className='form-control' id='pass' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} style={{height:"60px", width:"450px" , border:"solid 1px grey"  }} required></input>
                           {pass ? <label className='text-danger'>Password must be longer than 8 digits</label> : <></>}
                            <Button variant='danger' type='submit'  style={{width:"100%",marginTop:"10px" ,height:"70px" , backgroundColor:"red" , fontSize:"25px"}}>Next</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div style={{marginTop:"150px"}}>
        <Footer />
        </div>
    </div>
    
  )
}