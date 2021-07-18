import React,{useState} from 'react'

const Form = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [fisrtname,setfirstname]=useState("");
    const [fisrtnameError,setfirstnameError]=useState("");
    const [lastname,setLastname]=useState("");
    const [lastnameError,setLastnameError]=useState("");
    const[email,setEmail]=useState("");
    const[emailError,setEmailError]=useState("");
    const [password,setPassword]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser=(e) => {
        e.preventDefault();
        const newUser={title,fisrtname,lastname,email,password};
        console.log("welcome"+newUser);
        setHasBeenSubmitted(true );
        
    } 
    const handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        }
    }
    const handleFistname = (e) => {
        setfirstname(e.target.value);
        if(e.target.value.length < 1) {
            setfirstnameError("first name  is required!");
        } else if(e.target.value.length < 3) {
            setfirstnameError("first name must be 3 characters or longer!");
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 1) {
            setLastnameError("last name  is required!");
        } else if(e.target.value.length < 3) {
            setLastnameError("last name must be 3 characters or longer!");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Email is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Email must be 8 characters or longer!");
        }
    }
    
    const formMessage =() =>{
        if(hasBeenSubmitted){
            return "Thank you for submitting the form!";
        }else{
            return "Welcome, please submit the form";
        }

    }
    return (
        <div>
            <form onSubmit={createUser}>
                {hasBeenSubmitted ? 
            <h3>"Thank you for submitting the form!" </h3>:<h3>"Welcome, please submit the form" </h3>}
             <div>
                <label>Title: </label>
                <input type="text" onChange={ handleTitle }  />
                {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
                    ''
                }
            </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={handleFistname}/>
                    {
                    fisrtnameError ?
                    <p style={{color:'red'}}>{ fisrtnameError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={handleLastname}/>
                    {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={handleEmail}/>
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password   " onChange={handlePassword}/>
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                </div>
                <input type="submit" value="create user" />


                





            </form>
<p>Title: {title}</p>
            <p>First Name: {fisrtname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>password:{password}</p>
            
        </div>
    )
}

export default Form
