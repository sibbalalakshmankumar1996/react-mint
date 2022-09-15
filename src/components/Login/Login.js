import React, { useState } from 'react';
import './_login.scss'

export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "", errorMsg: "" });

  const handler = event => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value })
  }
  //console.log(loginData)


  const validateData = event => {
    event.preventDefault();
    if (loginData.email !== "" && loginData.password !== "") {
      setLoginData({ ...loginData, errorMsg: "" })
    }
    else {
      setLoginData({ ...loginData, errorMsg: "Please fill the input field" })
    }

  }


  return (


    <>
      <h2>Login</h2>
      {loginData.errorMsg !== '' &&
        <p className="error">{loginData.errorMsg}</p>}
      <form onSubmit={validateData}>
        <div className="form-group m-2">
          <input type="email" className="form-control" placeholder="Email Address" name="email" onChange={handler} />
        </div>
        <div className="form-group m-2">
          <input type="password" className="form-control" placeholder="Password" name="password" onChange={handler} />
        </div>
        <div className="form-group m-2">
          <input type="submit" className="btn btn-dark text-white" value="Login" />
        </div>
      </form>
    </>
  )
}
