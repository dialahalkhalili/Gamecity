import React, { useState } from 'react';
import { loginUser } from '../../actions';
import { connect } from 'react-redux'
// import { Redirect } from 'react-router-dom';


const Login = ( {loginUser, isLoggedIn} ) => {
    // console.log(isLoggedIn,"isLoggedIn")
    // if(isLoggedIn) return <Redirect to="/"/>
    let [data, setData] = useState ({
        email: "",
        password: ""
    })

    let {  email, password  } = data


    const onChange = (e)=> {

        setData({...data, [e.target.name]: e.target.value})
        console.log([e.target.value])
    }

    const onsubmit = () =>{
        // if(email === "" || password === ""){
        //     alert("Fill all feilds")
        // }else 
        // console.log(email, password)
        loginUser(email, password)
    }

    


    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <label>Email</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="email" name = "email" value={email}></input>
            <br/>
            <label>Password</label>
            <br/>
            <input onChange = {(e)=> onChange(e) } type="password" name = "password" value={password}></input>
            <br/>
            <br/>
            <button type= "submit" onClick= {()=> onsubmit()}>submit</button>
        </div>
    )
}

const mapStateToProps = state =>({
    isLoggedIn: state.isLoggedIn

})
export default connect(mapStateToProps, {loginUser})(Login);