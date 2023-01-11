import React,{useState} from "react"
import { Link } from "react-router-dom"

const SignIn = () => {
const [signInData, setSignInData] = useState({
    emailAddress: "",
    password: ""
})

function handleChange(event) {
    setSignInData((prevData)=> {
        return {
            ...prevData,
            [event.target.name] : event.target.value
        }
    })
}
function handleSubmit(event) {
    event.preventDefault()
    console.log(signInData)
}    return (
        <>
            <div className="main-container">
                <div className="Title">
                    <img src="STUDEARNT.png" alt="student-logo" className="img-logo"/>
                        Konnect
                    </div>
                <div className="box">
                    <form className="form" onSubmit={handleSubmit}>
                        <h3 className="signin-title">Sign In</h3>
                        <div className="inputBox">
                            <input 
                            type="text"
                            name="emailAddress"
                            value={signInData.emailAddress}
                            onChange={handleChange}
                            required="required" />
                            <span>Email Address</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                            type="password"
                            name="password"
                            value={signInData.password}
                            onChange={handleChange}
                            required="required"/>
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links">
                            <a href="index.html">Forgot password</a>
                            <a href="index.html"><Link to="/register">Sign up</Link></a>
                        </div>
                        <button className="btn">Sign In</button>
                    </form>

                </div>
            </div>

        </>
    )
}

export default SignIn