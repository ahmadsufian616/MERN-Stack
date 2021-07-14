import React,{useState} from 'react'

const Form = (props) => {
    const [fisrtname,setfirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const createUser=(e) => {
        e.preventDefault();
        const newUser={fisrtname,lastname,email,password};
        console.log("welcome"+newUser);
    } 
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={(e)=>setfirstname(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <input type="submit" value="create user" />


                





            </form>

            <p>First Name: {fisrtname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>password:{password}</p>
            
        </div>
    )
}

export default Form
