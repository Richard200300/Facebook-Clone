import React, {useState} from "react"
import { unidata } from "./universitydata"
import { Link } from "react-router-dom"

const SignUp = () => {
    const [formData, setFormData] = useState(
        {
            emailAddress: "",
            password: "",
            uniName: ""
        }
    )
    function handleChange(event) {
        setFormData((prevformData)=> {
            return {
                ...prevformData,
                [event.target.name] : event.target.value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
      setFormData({
            emailAddress: "",
            password: "",
            uniName: ""
        })
    }
    return (
        <>

            <div className="main-container">
            <div className="Title">
                    <img src="STUDEARNT.png" alt="student-logo"className="img-logo"/>
                    Konnect
                    </div>
                <div className="box-su">
                    <form className="form" onSubmit={handleSubmit}>
                        <h3 className="title-su">Register</h3>
                        <select 
                        value={formData.uniName}
                        onChange={handleChange}
                        name="uniName"
                        className="signup-select"
                        >
                            {unidata.map((data) => {
                                return <option key={data.id}value={data.name} className="sign-option">{data.name} ({data.abbreviation})</option>
                            })}
                        </select>
                        <div className="inputBox">
                            <input 
                            type="text" 
                            onChange={handleChange}
                            name="emailAddress"
                            required="required"
                            value={formData.emailAddress}
                             />
                            <span>Email Address</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input 
                            type="password" 
                            onChange={handleChange}
                            value={formData.password}
                            name="password"
                            required="required" />
                            <span>Password</span>
                            <i></i>
                        </div>
                        <div className="links-su">
                            <button className="btn-su">
                                <Link to="/confirmation" className="btn-su">Create Account</Link>
                            </button>
                            <p className="signIn-link">
                                <Link to="/login">Sign In</Link>
                                </p>
                        </div>
                        <p className="signIN-question">Have an account already? </p>

                    </form>

                </div>
            </div>


        </>
    )
}
export default SignUp;